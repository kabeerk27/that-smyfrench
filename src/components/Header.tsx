'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur bg-opacity-95">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition duration-300">
          <Image 
            src="/logo.jpeg" 
            alt="That's My French Logo" 
            width={50} 
            height={50}
            className="rounded-lg"
            priority
          />
          <span className="font-bold text-lg text-primary hidden sm:inline">That's My French</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary text-2xl hover:text-secondary transition focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex gap-2 md:gap-8 items-center absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row p-4 md:p-0 rounded-b-lg md:rounded-none`}>
          <li><Link href="/" className="text-gray-700 hover:text-secondary transition duration-300 font-medium">Home</Link></li>
          <li><Link href="/courses" className="text-gray-700 hover:text-secondary transition duration-300 font-medium">Courses</Link></li>
          <li><Link href="/reviews" className="text-gray-700 hover:text-secondary transition duration-300 font-medium">Reviews</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-secondary transition duration-300 font-medium">About</Link></li>
          <li className="md:ml-4"><a href="/contact" className="btn-primary text-sm md:text-base">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}
