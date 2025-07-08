



"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const heroImages = ["/home.jpg", "/ho2.jpg", "/ho1.jpg"];
const galleryImages = [

  "/vada-pav.jpg",
  "/paneer.jpg",
  "/vegthali.jpg",
  "/pithala.jpg",
  "/solk.jpg",
  "/non.jpg",
  
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current!);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      }
    }, 2000);
  };

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <main className="min-h-screen text-white">
      {/* 🔥 Hero Section */}
      <section
        className="relative h-[90vh] w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {heroImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Hero ${i}`}
            fill
            priority
            className={`absolute transition-opacity duration-1000 ease-in-out object-cover brightness-[0.4] ${
              i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">🍽️ Welcome to Hotel Chirag</h1>
          <p className="text-xl sm:text-2xl max-w-2xl">Taste the real Indian spice! We serve homemade-style food with a dash of love. Visit us or order online.</p>
        </div>

        {/* ⬅️➡️ Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-30"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-30"
        >
          ▶
        </button>
      </section>

      {/* 🖼️ Gallery Section */}
      <section className="bg-white text-black py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">Our Food 🍽️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={src}
                alt={`Gallery ${i}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
