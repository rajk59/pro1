
// "use client";

// const menu = [
//   {
//     category: "☕ चहा नाश्ता",
//     items: [
//       { name: "चहा", price: 15 },
//       { name: "स्पेशल चहा", price: 20 },
//       { name: "ब्लॅक टी", price: 15 },
//       { name: "कॉफी", price: 20 },
//       { name: "दूध", price: 20 },
//       { name: "कांदे पोहे ", price: 40 },
//       { name: "बटाट्याची भजी", price: 70 },
//       { name: "कांदा भजी", price: 70 },
//       { name: "वडापाव (२ पीस)", price: 40 },
//       { name: "स्पेशल मिसळपाव", price: 70 },
//       { name: "शिरा", price: 40 },
//       { name: "उपमा", price: 50 },
//       { name: "पुरी भाजी", price: 60 },
//       { name: "साबुदाण्याची खिचडी", price: 60 },
//       { name: "मॅगी", price: 50 },
//       { name: "मसाला मैगी", price: 60 },
//       { name: "अंडा मॅगी ", price: 70 },
//       { name: "भुरजी पाव", price: 80 },
//       { name: "ऑम्लेट पाव", price: 70 },
//       { name: "अंडी भुर्जी", price: 50 },
//       { name: "हाफ फ्राय अंडा", price: 50 },
//     ],
//   },
//   {
//     category: "🥦 व्हेज डिशेस",
//     items: [
//       { name: "पिठलं", price: 120 },
//       { name: "शेव भाजी ", price: 150 },
//       { name: "डाळ फ्राय", price: 110 },
//       { name: "डाळ तडका", price: 120 },
//       { name: "मिक्स व्हेज", price: 100 },
//       { name: "व्हेज कोल्हापुरी", price: 200 },
//       { name: "पनीर मसाला", price: 200 },
//       { name: "काजू मसाला", price: 200 },
//       { name: "बंडे पनीर स्टफ्ड", price: 200 },
//       { name: "व्हेज राईस प्लेट", price: 130 },
//     ],
//   },
//   {
//     category: "🍗 नॉनव्हेज डिशेस",
//     items: [
//       { name: "चिकन मसाला", price: 150 },
//       { name: "चिकन कोल्हापुरी", price: 180 },
//       { name: "अंडी करी", price: 130 },
//       { name: "अंडा मसाला", price: 150 },
//       { name: "चिकन हंडी ", price: 300/550 },
//       { name: "चिकन थाळी", price: 200 },
//       { name: "अंडी थाळी", price: 150 },
   
//     ],
//   },
//   {
//     category: "🥤 कोल्डड्रिंक्स",
//     items: [
//       { name: "सोलकढी", price: 40 },
//       { name: "कोकम सरबत", price: 30 },
//       { name: "मसाला ताक", price: 35 },
//          { name: "कोल्डड्रिंक्स", price: - },
//     ],
//   },
//   {
//     category: "🍚 पापड / रोटी / राईस",
//     items: [
//       { name: "चपाती", price: 15 },
//       { name: "भाकरी", price: 20 },
//       { name: "सादा राईस", price: 70 },
//       { name: "जीरा राईस", price: 90 },
//       { name: "प्रायड पापड", price: 30 },
//       { name: "मसाला पापड", price: 50 },
//     ],
//   },
// ];

// export default function MenuPage() {
//   return (
//     <main className="p-6 bg-yellow-50 min-h-screen text-center">
//       <h1 className="text-4xl font-bold mb-10 text-red-700">📜 हॉटेल चिराग मेनू</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {menu.map((section, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-yellow-300">
//             <h2 className="text-xl font-bold text-yellow-600 mb-3">{section.category}</h2>
//             <div className="divide-y divide-dashed divide-gray-300">
//               {section.items.map((item, idx) => (
//                 <div key={idx} className="flex justify-between py-2 text-gray-800">
//                   <span>{item.name}</span>
//                   <span className="text-green-700 font-medium">
//                     {item.price === "-" ? "Market Price" : `₹${item.price}`}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



"use client";

const menu = [
  {
    category: "☕ चहा नाश्ता",
    items: [
      { name: "चहा", price: 15 },
      { name: "स्पेशल चहा", price: 20 },
      { name: "ब्लॅक टी", price: 15 },
      { name: "कॉफी", price: 20 },
      { name: "दूध", price: 20 },
      { name: "कांदे पोहे ", price: 40 },
      { name: "बटाट्याची भजी", price: 70 },
      { name: "कांदा भजी", price: 70 },
      { name: "वडापाव (२ पीस)", price: 40 },
      { name: "स्पेशल मिसळपाव", price: 70 },
      { name: "शिरा", price: 40 },
      { name: "उपमा", price: 50 },
      { name: "पुरी भाजी", price: 60 },
      { name: "साबुदाण्याची खिचडी", price: 60 },
      { name: "मॅगी", price: 50 },
      { name: "मसाला मैगी", price: 60 },
      { name: "अंडा मॅगी ", price: 70 },
      { name: "भुरजी पाव", price: 80 },
      { name: "ऑम्लेट पाव", price: 70 },
      { name: "अंडी भुर्जी", price: 50 },
      { name: "हाफ फ्राय अंडा", price: 50 },
    ],
  },
  {
    category: "🥦 व्हेज डिशेस",
    items: [
      { name: "पिठलं", price: 120 },
      { name: "शेव भाजी ", price: 150 },
      { name: "डाळ फ्राय", price: 110 },
      { name: "डाळ तडका", price: 120 },
      { name: "मिक्स व्हेज", price: 100 },
      { name: "व्हेज कोल्हापुरी", price: 200 },
      { name: "पनीर मसाला", price: 200 },
      { name: "काजू मसाला", price: 200 },
      { name: "बंडे पनीर स्टफ्ड", price: 200 },
      { name: "व्हेज राईस प्लेट", price: 130 },
    ],
  },
  {
    category: "🍗 नॉनव्हेज डिशेस",
    items: [
      { name: "चिकन मसाला", price: 150 },
      { name: "चिकन कोल्हापुरी", price: 180 },
      { name: "अंडी करी", price: 130 },
      { name: "अंडा मसाला", price: 150 },
      { name: "चिकन हंडी", price: "₹300 / ₹550" },
      { name: "चिकन थाळी", price: 200 },
      { name: "अंडी थाळी", price: 150 },
    ],
  },
  {
    category: "🥤 कोल्डड्रिंक्स",
    items: [
      { name: "सोलकढी", price: 40 },
      { name: "कोकम सरबत", price: 30 },
      { name: "मसाला ताक", price: 35 },
      { name: "कोल्डड्रिंक्स", price: "-" },
    ],
  },
  {
    category: "🍚 पापड / रोटी / राईस",
    items: [
      { name: "चपाती", price: 15 },
      { name: "भाकरी", price: 20 },
      { name: "सादा राईस", price: 70 },
      { name: "जीरा राईस", price: 90 },
      { name: "प्रायड पापड", price: 30 },
      { name: "मसाला पापड", price: 50 },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="px-4 py-6 bg-yellow-50 min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-10 text-red-700">📜 हॉटेल चिराग मेनू</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {menu.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-yellow-300">
            <h2 className="text-xl font-bold text-yellow-600 mb-3">{section.category}</h2>
            <div className="divide-y divide-dashed divide-gray-300">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 text-gray-800">
                  <span>{item.name}</span>
                  <span className="text-green-700 font-medium">
                    {typeof item.price === "number" ? `₹${item.price}` : item.price === "-" ? "Market Price" : item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
