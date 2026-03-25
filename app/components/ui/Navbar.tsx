"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-gray-800">
          MyApp
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black transition">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">
            Contact
            </Link>
            </div>
      </div>
    </nav>
  );
}