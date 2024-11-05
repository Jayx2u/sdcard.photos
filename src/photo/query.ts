import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rows } = await sql`
      SELECT url, title, make, model, taken_at_naive
      FROM photos
      ORDER BY taken_at_naive DESC
      LIMIT 50
    `;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
}