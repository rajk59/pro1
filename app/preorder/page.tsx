// 


"use client";

import { useState } from "react";
// import { menu } from "@/data/menu"; // ✅ USE THIS!
import { menu } from "../data/menu";

export default function PreOrderPage() {
  const [order, setOrder] = useState<Record<string, number>>({});

  const handleChange = (name: string, qty: number) => {
    setOrder((prev) => ({
      ...prev,
      [name]: qty,
    }));
  };

  const generateWhatsAppLink = () => {
    const orderItems = Object.entries(order)
      .filter(([_, qty]) => qty > 0)
      .map(([name, qty]) => `${name} x ${qty}`)
      .join("%0A");

    if (!orderItems) return "#";

    return `https://wa.me/918830651687?text=👋 नमस्कार Hotel Chirag,%0Aमी खालील पदार्थ आधीच ऑर्डर करू इच्छितो:%0A${orderItems}`;
  };

  return (
    <main className="min-h-screen bg-white text-white px-4 py-24">
      <h1 className="text-4xl font-bold text-green-400 mb-10 text-center">🛒 Pre-Order Food</h1>

      {menu.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-green-400">{section.category}</h2>
          <div className="space-y-4">
            {section.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-green-400 text-sm">
                    {item.price === "-" ? "Market Price" : `₹${item.price}`}
                  </p>
                </div>
                <input
                  type="number"
                  min={0}
                  value={order[item.name] || ""}
                  onChange={(e) => handleChange(item.name, parseInt(e.target.value) || 0)}
                  className="w-16 px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white"
                  placeholder="Qty"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-10">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium"
        >
          📤 Send Pre-Order via WhatsApp
        </a>
      </div>
    </main>
  );
}
