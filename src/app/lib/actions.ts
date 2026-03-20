'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function submitReview(formData: FormData) {
  const name = formData.get('name') as string;
  const rating = formData.get('rating') as string;
  const message = formData.get('message') as string;

  try {
    // This inserts the review into your Neon database
    await sql`
      INSERT INTO reviews (name, rating, message)
      VALUES (${name}, ${parseInt(rating)}, ${message})
    `;
    
    // This forces the reviews page to update instantly
    revalidatePath('/reviews'); 
    return { success: true };
  } catch (error) {
    console.error('Database Error:', error);
    return { success: false };
  }
}