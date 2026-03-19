'use client';

export default function ReviewsPreview() {
  const reviews = [
    {
      name: "Ahmed Hassan",
      batch: "TEFF Batch 2024",
      rating: 5,
      text: "Excellent teaching methodology! Passed TEFF with exceptional score. Highly recommended!",
      achievement: "✅ TEFF Passed"
    },
    {
      name: "Sara Patel",
      batch: "ICT Program",
      rating: 5,
      text: "The comprehensive approach covered all aspects. Very supportive and knowledgeable instructors.",
      achievement: "✅ ICT Certified"
    },
    {
      name: "Mohammed Ali",
      batch: "CLB 7+ Program",
      rating: 5,
      text: "Perfect preparation for Canadian PR exam. Worth every penny. Thank you!",
      achievement: "✅ CLB 7 Achieved"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="card bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-primary">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.batch}</p>
                </div>
                <div className="text-secondary text-lg">{'⭐'.repeat(review.rating)}</div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <p className="text-sm font-semibold text-green-600">{review.achievement}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/reviews" className="btn-primary">View All Reviews →</a>
        </div>
      </div>
    </section>
  );
}
