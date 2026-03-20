'use client';

import { useState } from 'react';
import AddReview from '@/components/AddReview';
export default function ReviewsPage() {
  const allReviews = [
    {
      name: "Ahmed Hassan",
      location: "Toronto, Canada",
      batch: "TEFF Intensive 2024",
      rating: 5,
      text: "Incredible teaching quality! The structured approach and expert guidance helped me achieve an exceptional score. The instructors really care about every student's success.",
      achievement: "✅ TEFF Passed - 88/100",
      date: "March 2024"
    },
    {
      name: "Sara Patel",
      location: "Vancouver, BC",
      batch: "ICT Program",
      rating: 5,
      text: "Very comprehensive program. The focus on all four skills - reading, writing, listening, and speaking - was perfect. I feel genuinely confident in French now.",
      achievement: "✅ ICT Certified",
      date: "February 2024"
    },
    {
      name: "Mohammed Ali",
      location: "Calgary, Alberta",
      batch: "CLB 7+ Program",
      rating: 5,
      text: "Perfect preparation for my Canadian PR exam. Every lesson was practical and directly applicable. The pass guarantee gave me confidence from day one.",
      achievement: "✅ CLB 7 Achieved",
      date: "January 2024"
    },
    {
      name: "Amina Khalil",
      location: "Montreal, Quebec",
      batch: "Conversational French",
      rating: 5,
      text: "I went from shy to confident speaker! The small batch size and encouraging environment made all the difference. Highly recommended for beginners.",
      achievement: "✅ Conversational Fluency Achieved",
      date: "December 2023"
    },
    {
      name: "John Smith",
      location: "Mississauga, ON",
      batch: "TEFF Intensive 2024",
      rating: 5,
      text: "Best investment I made for professional development. The study materials, mock tests, and expert feedback were invaluable. 10/10 would recommend!",
      achievement: "✅ TEFF Passed - 85/100",
      date: "November 2023"
    },
    {
      name: "Fatima Noor",
      location: "Edmonton, Alberta",
      batch: "ICT Program",
      rating: 5,
      text: "The teachers really know how to explain complex grammar concepts in simple terms. The interactive sessions made learning French enjoyable.",
      achievement: "✅ ICT Certified",
      date: "October 2023"
    },
    {
      name: "Hassan Ibrahim",
      location: "Brampton, ON",
      batch: "CLB 7+ Program",
      rating: 5,
      text: "Outstanding support from start to finish. The lifetime resource access is a huge bonus. I feel well-prepared for my future opportunities.",
      achievement: "✅ CLB 7+ Achieved",
      date: "September 2023"
    },
    {
      name: "Zainab Hassan",
      location: "Ottawa, ON",
      batch: "TEFF Intensive",
      rating: 5,
      text: "The comprehensive curriculum covers everything needed to pass. The one-on-one guidance was particularly helpful for my weak areas.",
      achievement: "✅ TEFF Passed - 82/100",
      date: "August 2023"
    },
    {
      name: "Ali Raza",
      location: "Winnipeg, Manitoba",
      batch: "Conversational French",
      rating: 5,
      text: "Wonderful experience! The teachers create a safe environment to make mistakes and learn. I've made friends from different backgrounds too!",
      achievement: "✅ Advanced Conversational Skills",
      date: "July 2023"
    },
    {
      name: "Leena Sharma",
      location: "Quebec City, QC",
      batch: "ICT Program",
      rating: 5,
      text: "The small classroom environment meant I got personalized attention. The mock exams were instrumental in my success.",
      achievement: "✅ ICT Certified",
      date: "June 2023"
    },
    {
      name: "Khalid Mohammad",
      location: "Halifax, Nova Scotia",
      batch: "CLB 7+ Program",
      rating: 5,
      text: "Professional, well-organized, and results-driven. The teaching staff are native speakers and make the content relatable.",
      achievement: "✅ CLB 7 Achieved",
      date: "May 2023"
    },
    {
      name: "Noor Rashid",
      location: "Waterloo, ON",
      batch: "TEFF Intensive",
      rating: 5,
      text: "Exceeded my expectations! The balance between grammar and conversation practice was perfect. I graduated feeling prepared.",
      achievement: "✅ TEFF Passed - 87/100",
      date: "April 2023"
    },
  ];

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const filteredReviews = selectedRating 
    ? allReviews.filter(r => r.rating === selectedRating)
    : allReviews;

  const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="section-title">Student Reviews & Achievements</h1>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card bg-gradient-to-br from-primary to-blue-800 text-white">
            <p className="text-sm text-blue-100">Total Reviews</p>
            <p className="text-4xl font-bold">{allReviews.length}</p>
            <p className="mt-2">From our amazing students</p>
          </div>
          <div className="card bg-gradient-to-br from-secondary to-amber-400 text-primary">
            <p className="text-sm font-semibold">Average Rating</p>
            <p className="text-4xl font-bold">{avgRating}⭐</p>
            <p className="mt-2">Consistently excellent</p>
          </div>
          <div className="card bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <p className="text-sm text-green-100">Success Rate</p>
            <p className="text-4xl font-bold">95%</p>
            <p className="mt-2">Pass rate across all courses</p>
          </div>
          <div className="card bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <p className="text-sm text-purple-100">Students Certified</p>
            <p className="text-4xl font-bold">2,000+</p>
            <p className="mt-2">Across all programs</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedRating(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedRating === null
                ? 'btn-primary'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary'
            }`}
          >
            All Reviews ({allReviews.length})
          </button>
          {[5, 4, 3].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedRating === rating
                  ? 'btn-primary'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary'
              }`}
            >
              {'⭐'.repeat(rating)} ({allReviews.filter(r => r.rating === rating).length})
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredReviews.map((review, index) => (
            <div key={index} className="card bg-white border-l-4 border-secondary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-primary">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
                <div className="text-xl">{'⭐'.repeat(review.rating)}</div>
              </div>
              
              <p className="text-xs text-gray-500 mb-2">Batch: {review.batch}</p>
              <p className="text-gray-700 italic mb-4">"{review.text}"</p>
              
              <div className="flex justify-between items-end pt-4 border-t border-gray-200">
                <span className="text-sm font-semibold text-green-600">{review.achievement}</span>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mb-16 px-4">
        <AddReview />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your journey to French mastery with expert guidance and proven results</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/courses" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Explore Courses
            </a>
            <a href="/contact" className="btn-secondary bg-secondary text-primary hover:bg-amber-400">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
