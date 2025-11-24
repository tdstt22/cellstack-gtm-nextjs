import { neon } from '@neondatabase/serverless';
import { NextResponse } from "next/server";
import type { FormSubmission, ApiSuccessResponse, ApiErrorResponse } from '@/types/get-started';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valid options for company size and role
const VALID_COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'];
const VALID_ROLES = ['founder', 'sales', 'marketing', 'operations', 'analyst', 'other'];

export async function POST(request: Request) {
  try {
    const body = await request.json() as Partial<FormSubmission>;

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.company || !body.companySize || !body.role) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate company size
    if (!VALID_COMPANY_SIZES.includes(body.companySize)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Invalid company size' },
        { status: 400 }
      );
    }

    // Validate role
    if (!VALID_ROLES.includes(body.role)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Invalid role' },
        { status: 400 }
      );
    }

    // Connect to the Neon database
    const sql = neon(`${process.env.PILOT_SIGNUP_DATABASE_URL}`);

    // Insert the form data into the database
    await sql`
      INSERT INTO get_started_submissions (
        first_name,
        last_name,
        email,
        company,
        company_size,
        role,
        message
      ) VALUES (
        ${body.firstName},
        ${body.lastName},
        ${body.email},
        ${body.company},
        ${body.companySize},
        ${body.role},
        ${body.message || null}
      )
    `;

    return NextResponse.json<ApiSuccessResponse>(
      { success: true, message: 'Submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json<ApiErrorResponse>(
      { success: false, error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
