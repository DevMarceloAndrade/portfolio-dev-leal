import { NextResponse } from 'next/server';
import { sendEmail } from '@/service/resendServices';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!emailRegex.test(email) || message.length < 10) {
      return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
    }

    await sendEmail(email, message);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Falha ao enviar e-mail.' }, { status: 500 });
  }
}
