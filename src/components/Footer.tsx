'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-blue-900 text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary">F</span>
              </div>
              <h3 className="font-bold text-2xl">That's My French</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Professional French coaching for all exam types. Trusted by 2,000+ students across Canada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-100 hover:text-secondary transition text-2xl">f</a>
              <a href="#" className="text-blue-100 hover:text-secondary transition text-2xl">𝕏</a>
              <a href="#" className="text-blue-100 hover:text-secondary transition text-2xl">▶</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Navigation</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/" className="hover:text-secondary transition duration-300">Home</Link></li>
              <li><Link href="/courses" className="hover:text-secondary transition duration-300">Courses</Link></li>
              <li><Link href="/reviews" className="hover:text-secondary transition duration-300">Reviews</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/courses" className="hover:text-secondary transition duration-300">TEF/TCF Prep</a></li>
              <li><a href="/courses" className="hover:text-secondary transition duration-300">DELF/DALF</a></li>
              <li><a href="/courses" className="hover:text-secondary transition duration-300">Conversational</a></li>
              <li><a href="/courses" className="hover:text-secondary transition duration-300">Business French</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Get in Touch</h4>
            <p className="text-blue-100 mb-2">
              <a href="mailto:thatismyfrench@gmail.com" className="hover:text-secondary transition duration-300">
                📧 thatismyfrench@gmail.com
              </a>
            </p>
            <p className="text-blue-100 mb-2">
              <a href="tel:+1234567890" className="hover:text-secondary transition duration-300">
                📞 +91-8979903752
              </a>
            </p>
            <p className="text-blue-100">📍 Canada\India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8 mb-8">
          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">2K+</div>
              <div className="text-xs text-blue-100">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-xs text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">4.9⭐</div>
              <div className="text-xs text-blue-100">Rating</div>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-2xl font-bold text-secondary">15+</div>
              <div className="text-xs text-blue-100">Years Exp</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>&copy; {currentYear} That's My French. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
