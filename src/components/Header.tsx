'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
  {/* Replace the div below with your image */}
  <img src="/logo.jpeg" alt="Logo" className="w-10 h-10" /> 
  
  <span className="font-bold text-xl text-primary"></span>
</Link>
          <span className="font-bold text-xl text-primary">That is My French</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary text-2xl"
        >
          ☰
        </button>

        <ul className={`hidden md:flex gap-8 items-center ${isOpen ? 'flex' : ''} absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row p-4 md:p-0`}>
          <li><Link href="/" className="hover:text-secondary transition">Home</Link></li>
          <li><Link href="/courses" className="hover:text-secondary transition">Courses</Link></li>
          <li><Link href="/reviews" className="hover:text-secondary transition">Reviews</Link></li>
          <li><Link href="/about" className="hover:text-secondary transition">About</Link></li>
          <li><Link href="/contact" className="btn-primary">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
