
// app/delivery/page.tsx
"use client";

export default function DeliveryPage() {
  const phone = "+918830651687";
  const message = encodeURIComponent("Hi Hotel Chirag, I’d like to order food.");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-6 py-12 text-center">
   
       <img
        src="\vegthali.jpg"
        alt="Food Delivery"
        className="w-40 h-40 md:w-52 md:h-52 mb-6 rounded-full shadow"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
        🚚 Home Delivery
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
        Enjoy hot and fresh meals delivered right to your doorstep. Order now on WhatsApp!
      </p>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-xl shadow-lg transition"
      >
        📱 Order on WhatsApp
      </a>
    </main>
  );
}
