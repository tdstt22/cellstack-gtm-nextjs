import { EmailTemplate } from '@/components/email/email-template';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email } = body;

    // Validate required fields
    if (!firstName || !email) {
      console.error('Email API: Missing required fields', { firstName: !!firstName, email: !!email });
      return NextResponse.json({ success: true });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Email API: Invalid email format', { email });
      return NextResponse.json({ success: true });
    }

    const { data, error } = await resend.emails.send({
      from: 'Cellstack <onboarding@gtm.cellstackai.com>',
      to: [email],
      subject: 'Welcome to Cellstack - Your Pilot Program Request',
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      console.error('Email API: Resend error', error);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email API: Unexpected error', error);
    return NextResponse.json({ success: true });
  }
}