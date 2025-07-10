"use client";

import Image from "next/image";

const galleryImages = [
  "/vada-pav.jpg",
  "/paneer.jpg",
  "/vegthali.jpg",
  "/pithala.jpg",
  "/solk.jpg",
];

export default function GalleryPage() {
  return (
    <main className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-8 text-yellow-600">🖼️ Food Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform"
          >
            <Image
              src={src}
              alt={`Dish ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
