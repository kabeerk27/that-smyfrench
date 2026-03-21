'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.jpeg" 
              alt="Logo" 
              width={45} 
              height={45} 
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-primary hidden md:block">
              That is My French
            </span>
          </Link>

          {/* NAVBAR LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary font-medium">Courses</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-primary font-medium">Reviews</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
          </div>

          {/* AUTH SECTION */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all">
                  Get Started
                </button>
              </SignInButton>
            )}

            {/* Mobile Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}