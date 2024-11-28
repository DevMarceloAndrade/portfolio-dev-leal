import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(name: string,email: string) {
    'use server'
    return resend.emails.send({
        from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
        to: 'andradefj13@hotmail.com',
        subject: `${name} enviou um email para contato via portfolio.`,
        text: email,
    }).then(() => {
        return true
    }).catch((error) => {
        throw new Error(error)
    })
}