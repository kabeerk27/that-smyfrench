import { sql } from '@vercel/postgres';
import AddReview from '@/components/AddReview';

// 1. This tells Vercel to fetch fresh data on every visit
export const dynamic = 'force-dynamic';

export default async function ReviewsPage() {
  // 2. Fetch the real reviews from your Neon database
  const { rows: reviews } = await sql`SELECT * FROM reviews ORDER BY created_at DESC`;

  return (
    <main className="min-h-screen bg-gray-50 py-12 text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Student Reviews</h1>
        <p className="text-center text-gray-600 mb-10">Real feedback from our French language students</p>
        
        {/* 3. The Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No reviews yet. Be the first!</p>
          ) : (
            reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-blue-900">{rev.name}</h3>
                    <div className="text-yellow-500 text-sm">
                      {'⭐'.repeat(rev.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{rev.message}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                   <span className="text-xs text-green-600 font-semibold">Verified Student</span>
                   <span className="text-xs text-gray-400">
                     {new Date(rev.created_at).toLocaleDateString()}
                   </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. The Form Section */}
        <div className="max-w-2xl mx-auto border-t pt-12">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Share Your Experience</h2>
          <AddReview />
        </div>
      </div>
    </main>
  );
}