'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">That is My French</h3>
            <p className="text-blue-100">Professional French coaching for TEF/TCF & DELF/DALF exam success.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-secondary transition">Courses</Link></li>
              <li><Link href="/reviews" className="hover:text-secondary transition">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-secondary transition">TEF/TCF Preparation</a></li>
              <li><a href="#" className="hover:text-secondary transition">DELF/DALF Mastery</a></li>
              <li><a href="#" className="hover:text-secondary transition">Group Batches</a></li>
              <li><a href="#" className="hover:text-secondary transition">One-on-One</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-blue-100 mb-2">Email: thatismyfrench@gmail.com</p>
            <p className="text-blue-100 mb-2">Phone: +91-8979903752</p>
            <p className="text-blue-100">Location: Canada/India</p>
          </div>
        </div>
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p>&copy; {currentYear} That's My French. All rights reserved. | Teaching Excellence in French</p>
        </div>
      </div>
    </footer>
  );
}
