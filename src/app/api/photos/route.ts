import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT url, title, make, model, taken_at_naive
      FROM photos
      ORDER BY taken_at_naive DESC
      LIMIT 50
    `;

    return NextResponse.json({ images: rows });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
}