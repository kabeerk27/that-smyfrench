"use client";
import React, { useState } from 'react';

export default function AddReview() {
  const [review, setReview] = useState({ name: '', rating: '5', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This formats the message for your WhatsApp
    const whatsappMessage = `Hi! I'd like to leave a review for That is My French:%0A%0A*Name:* ${review.name}%0A*Rating:* ${review.rating}/5 stars%0A*Review:* ${review.message}`;
    
    // Replace with your actual WhatsApp number
    window.open(`https://wa.me/918979903752?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-10">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input 
            type="text" required 
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
            onChange={(e) => setReview({...review, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <select 
            className="w-full p-2 border rounded-lg text-black"
            onChange={(e) => setReview({...review, rating: e.target.value})}
          >
            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (Good)</option>
            <option value="3">⭐⭐⭐ (Average)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Experience</label>
          <textarea 
            required rows={4}
            className="w-full p-2 border rounded-lg text-black"
            onChange={(e) => setReview({...review, message: e.target.value})}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Submit Review via WhatsApp
        </button>
      </form>
    </section>
  );
}