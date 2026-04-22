import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(senderEmail: string, message: string) {
  "use server";

  const fromName = process.env.EMAIL_FROM_NAME;
  const fromEmail = process.env.EMAIL_FROM_EMAIL;
  const contactEmail = process.env.CONTACT_TO_EMAIL ?? "andradefj13@hotmail.com";

  if (!fromName || !fromEmail) {
    throw new Error("Configuração de e-mail incompleta.");
  }

  try {
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: contactEmail,
      subject: `Novo contato via portfólio (${senderEmail})`,
      text: message,
      replyTo: senderEmail,
    });

    return true;
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Erro inesperado no serviço de e-mail.";
    throw new Error(reason);
  }
}
