'use client';
import React, { useRef } from 'react';
import { submitReview } from '@/app/lib/actions';

export default function AddReview() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await submitReview(formData);
    if (result.success) {
      alert("Merci! Your review has been posted.");
      formRef.current?.reset(); // Clears the form
    } else {
      alert("Oops! Something went wrong. Try again.");
    }
  }

  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border mt-10 text-black">
      <h3 className="text-2xl font-bold mb-4 text-blue-900">Write a Review</h3>
      <form ref={formRef} action={handleAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input name="name" type="text" required className="w-full p-2 border rounded-lg bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <select name="rating" className="w-full p-2 border rounded-lg bg-white text-black">
            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (Good)</option>
            <option value="3">⭐⭐⭐ (Average)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Experience</label>
          <textarea name="message" required rows={4} className="w-full p-2 border rounded-lg bg-white text-black"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
          Post Review Instantly
        </button>
      </form>
    </section>
  );
}