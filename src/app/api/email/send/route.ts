import { EmailTemplate } from '@/components/email/email-template';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Cellstack <hello@onboarding.cellstackai.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}