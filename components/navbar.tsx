"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-600">Hotel Chirag</h1>
        <div className="space-x-6 text-gray-800 font-medium">
          <Link href="/home">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/delivery">Delivery</Link>
        </div>
      </div>
    </nav>
  );
}

