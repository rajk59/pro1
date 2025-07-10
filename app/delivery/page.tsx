
// "use client";
// import { useState } from "react";

// export default function DeliveryPage() {
//   const menu = [
//     {
//       category: "चहा मास्ता",
//       items: [
//         "चहा", "स्पेशल चहा", "ब्लॅक टी", "कॉफी", "दूध", "कॅपुचीनो",
//         "वडापाव (२ पीस)", "स्पेशल मिसळपाव", "चायनीज भेळ", "वडासांबर",
//         "वडा सँडविच", "पूडीनाजी", "शिरा", "उपमा", "मिसळ", "मसाला मैगी",
//         "अंडी भुर्जी", "बुर्जी पाव", "आमलेट पाव", "फुल अंडी (२ पीस)", "हाफ फ्राय अंडी"
//       ],
//     },
//     {
//       category: "व्हेज डिशेस",
//       items: [
//         "पिठलं", "शेंगाजी", "डाळ तडका", "कढी", "मिक्स भाजी",
//         "वांगे बटाटा रस्सा", "कोबी बटाटा रस्सा", "वरण", "पनीर भुर्जी",
//         "पनीर कोल्हापुरी", "पनीर मसाला", "काजू मसाला", "काजू पनीर मसाला",
//         "मटर पनीर मसाला", "बंडे पनीर स्टफ्ड", "व्हेज राइस प्लेट", "रायता", "झुणका भाजी"
//       ],
//     },
//     {
//       category: "नॉनव्हेज डिशेस",
//       items: [
//         "चिकन मसाला", "चिकन कोल्हापुरी", "अंडी करी", "मटण मसाला",
//         "मटण हंडी झणझणीत", "पायातळ थाळी", "सुके मटण थाळी", "मसाला मटण थाळी",
//         "चिकन थाळी", "अंडी थाळी"
//       ],
//     },
//     {
//       category: "कोल्डड्रिंक्स",
//       items: [
//         "सोलकढी", "कोकम सरबत", "कोक", "स्प्राईट", "ताक", "मसाला ताक", "कोल्ड्रिंक्स"
//       ],
//     },
//     {
//       category: "पापड / रोटी / भात",
//       items: [
//         "चपाती", "भाकरी लोणचं", "पोळी", "तांदूळ भात", "जीरा राईस",
//         "प्रायड राईस", "सादा पापड", "मसाला पापड"
//       ],
//     },
//   ];

//   const [selectedItems, setSelectedItems] = useState([]);
//   const toggleItem = (item) => {
//     setSelectedItems((prev) =>
//       prev.includes(item)
//         ? prev.filter((i) => i !== item)
//         : [...prev, item]
//     );
//   };

//   const phone = "918830651687";
//   const message = encodeURIComponent(
//     `Hi Hotel Chirag, I’d like to order (Home Delivery):\n${selectedItems.join(", ")}`
//   );

//   return (
//     <main className="p-6 md:p-10 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">🚚 Home Delivery</h1>
//       <p className="text-center mb-4">Select food items to order on WhatsApp</p>

//       {menu.map((section, idx) => (
//         <div key={idx} className="mb-6">
//           <h2 className="text-xl font-semibold text-yellow-600 mb-2">{section.category}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//             {section.items.map((item, j) => (
//               <div
//                 key={j}
//                 onClick={() => toggleItem(item)}
//                 className={`border px-4 py-2 rounded cursor-pointer ${
//                   selectedItems.includes(item)
//                     ? "bg-green-100 border-green-500"
//                     : "hover:bg-yellow-50"
//                 }`}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <div className="text-center mt-8">
//         <a
//           href={`https://wa.me/${phone}?text=${message}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow-md hover:bg-green-700 transition"
//         >
//           Order on WhatsApp
//         </a>
//       </div>
//     </main>
//   );
// }



"use client";

export default function DeliveryPage() {
  const phone = "+918830651687";
  const message = encodeURIComponent("Hi Hotel Chirag, I’d like to order food.");

  return (
    <main className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-yellow-600">🚚 Home Delivery</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto text-gray-700">
        We deliver hot and fresh food right to your doorstep. Call us or order
        via WhatsApp!
      </p>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600"
      >
        📱 Order on WhatsApp
      </a>

      {/* <div className="mt-12 text-left max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-700">📞 Contact Info</h3>
        <p><strong>Phone:</strong> +91-88306 51687 / +91-92726 18957</p>
        <p><strong>Address:</strong>Hotel chirag,midc road sanaswadi, near Hp petrol pump,Raigad-mangaon </p>
        <p><strong>Hours:</strong> 7am – 11pm (All days)</p>
      </div> */}
    </main>
  );
}


