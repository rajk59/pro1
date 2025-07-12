
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Step 1: तुमचे multiple images इथे टाका
const heroImages = ["/home.jpg", "/ho2.jpg", "/ho1.jpg","/m.jpg","/a1.jpg","/a2.jpg"];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={heroImages[currentIndex]}
          alt="Hotel Chirag"
          layout="fill"
          objectFit="cover"
          className="brightness-75 transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">🍽️ Welcome to Hotel Chirag</h1>
          <p className="text-xl mb-6 max-w-xl">
            Discover the taste of tradition – Fresh, local, and lovingly prepared.
          </p>
          <div className="flex gap-4">
            <Link href="/menu">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-xl font-semibold shadow">
                View Menu
              </button>
            </Link>
            <Link href="/gallery">
              <button className="bg-white text-yellow-600 hover:text-yellow-700 border border-yellow-500 px-6 py-2 rounded-xl font-semibold shadow">
                Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl p-8 text-lg mt-12">
        <h2 className="text-3xl font-bold mb-4 text-yellow-600">About Us</h2>
        <p className="text-gray-700">
          Hotel Chirag is your go-to place for delicious Maharashtrian food,
          authentic flavors, and warm hospitality. We serve a wide variety of
          snacks, meals, and drinks at affordable prices.
        </p>
      </section>
    </main>
  );
}






