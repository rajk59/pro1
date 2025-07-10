

// // export default function Menu() {
// //   const items = [
// //     { name: "Paneer Butter Masala", price: "₹180" },
// //     { name: "Veg Thali", price: "₹120" },
// //     { name: "Dal Tadka", price: "₹100" },
// //     { name: "Tandoori Roti (2pcs)", price: "₹30" },
// //     { name: "Chai", price: "₹15" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white p-8">
// //       <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
// //         📜 Our Menu
// //       </h1>

// //       <div className="space-y-4">
// //         {items.map((item, index) => (
// //           <div
// //             key={index}
// //             className="flex justify-between items-center border-b border-gray-300 pb-2 text-lg hover:bg-yellow-50 transition-all px-2 rounded"
// //           >
// //             <span>{item.name}</span>
// //             <span className="text-green-600 font-semibold">{item.price}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // newmmmmmmmmmmmm

// export default function Menu() {
//   const menu = [
//     {
//       category: "चहा-नाश्ता",
//       items: [
//         { name: "चहा", price: 15 },
//         { name: "स्पेशल चहा", price: 20 },
//         { name: "ब्लॅक टी", price: 15 },
//         { name: "कॉफी", price: 20 },
//         { name: "दूध", price: 20 },
//         { name: "कांदेपोहे", price: 40 },
//         { name: "वडापाव (२ पीस)", price: 20 },
//         { name: "स्पेशल मिसळपाव", price: 70 },
//         { name: "कांदा भजी", price: 70 },
//         { name: "", price: 70 },
//         { name: "पूडीनाजी", price: 50 },
//         { name: "शिरा", price: 50 },
//         { name: "उपमा", price: 50 },
//         { name: "सांजिबाण डिशेसची भेळ", price: 50 },
//         { name: "मिसळ", price: 50 },
//         { name: "मसाला मैगी", price: 50 },
//         { name: "अंडी भुर्जी", price: 50 },
//         { name: "बुर्जी पाव", price: 50 },
//         { name: "आमलेट पाव", price: 50 },
//         { name: "फुल अंडी (२ पीस)", price: 50 },
//         { name: "हाफ फ्राय अंडी", price: 50 },
//       ],
//     },
//     {
//       category: "व्हेज डिशेस",
//       items: [
//         { name: "पिठलं", price: 120 },
//         { name: "शेंगाजी", price: 150 },
//         { name: "डाळ तडका", price: 100 },
//         { name: "कढी", price: 100 },
//         { name: "मिक्स भाजी", price: 180 },
//         { name: "वांगे बटाटा रस्सा", price: 110 },
//         { name: "कोबी बटाटा रस्सा", price: 110 },
//         { name: "वरण", price: 100 },
//         { name: "पनीर भुर्जी", price: 150 },
//         { name: "पनीर कोल्हापुरी", price: 180 },
//         { name: "पनीर मसाला", price: 200 },
//         { name: "काजू मसाला", price: 200 },
//         { name: "काजू पनीर मसाला", price: 220 },
//         { name: "मटर पनीर मसाला", price: 200 },
//         { name: "बंडे पनीर स्टफ्ड", price: 200 },
//         { name: "व्हेज राइस प्लेट", price: 130 },
//         { name: "रायता", price: 40 },
//         { name: "झुणका भाजी", price: 60 },
//       ],
//     },
//     {
//       category: "नॉनव्हेज डिशेस",
//       items: [
//         { name: "चिकन मसाला", price: 150 },
//         { name: "चिकन कोल्हापुरी", price: 180 },
//         { name: "अंडी करी", price: 130 },
//         { name: "मटण मसाला", price: 300 },
//         { name: "मटण हंडी झणझणीत", price: 550 },
//         { name: "पायातळ थाळी", price: "-" },
//         { name: "सुके मटण थाळी", price: "-" },
//         { name: "मसाला मटण थाळी", price: "-" },
//         { name: "चिकन थाळी", price: 200 },
//         { name: "अंडी थाळी", price: 150 },
//       ],
//     },
//     {
//       category: "कोल्डड्रिंक्स",
//       items: [
//         { name: "सोलकढी", price: 40 },
//         { name: "कोकम सरबत", price: 30 },
//         { name: "कोक", price: 40 },
//         { name: "स्प्राईट", price: 40 },
//         { name: "ताक", price: 30 },
//         { name: "मसाला ताक", price: 35 },
       
//       ],
//     },
//     {
//       category: "पापड / रोटी / राईस",
//       items: [
//         { name: "चपाती", price: 15 },
//         { name: "भाकरी ", price: 20 },
//         { name: "सादा राईस", price: 70 },
//         { name: "जीरा राईस", price: 90 },
//         { name: "प्रायड पापड", price: 30 },
//         { name: "सादा पापड", price: 30 },
//         { name: "मसाला पापड", price: 50 },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white p-8">
//       <h1 className="text-3xl font-bold mb-8 text-red-700">📜 Hotel Chirag Menu</h1>

//       {menu.map((section, i) => (
//         <div key={i} className="mb-10">
//           <h2 className="text-2xl font-semibold mb-4 text-yellow-600">{section.category}</h2>
//           <div className="space-y-2">
//             {section.items.map((item, j) => (
//               <div
//                 key={j}
//                 className="flex justify-between items-center border-b border-gray-300 pb-1 px-2 hover:bg-yellow-50 rounded"
//               >
//                 <span>{item.name}</span>
//                 <span className="text-green-600 font-semibold">
//                   {item.price === "-" ? "Market Price" : `₹${item.price}`}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

const menu = [
  {
    category: "☕ चहा-नाश्ता",
    items: [
      { name: "चहा", price: 15 },
      { name: "स्पेशल चहा", price: 20 },
      { name: "कॉफी", price: 20 },
      { name: "वडापाव", price: 15 },
       { name: "वडापाव", price: 15 },
        { name: "वडापाव", price: 15 },
         { name: "वडापाव", price: 15 },
          { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
      { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },                     
    ],
  },
  {
    category: "🥘 जेवण",
    items: [
      { name: "वेज थाळी", price: 100 },
      { name: "मिसळपाव", price: 40 },
      { name: "पिठलं भाकर", price: 80 },
       { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
                  { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
    ],
  },

  {
    category: "🥘 जेवण",
    items: [
      { name: "वेज थाळी", price: 100 },
      { name: "मिसळपाव", price: 40 },
      { name: "पिठलं भाकर", price: 80 },
       { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
                  { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
    ],
  },


{
    category: "🥘 जेवण",
    items: [
      { name: "वेज थाळी", price: 100 },
      { name: "मिसळपाव", price: 40 },
      { name: "पिठलं भाकर", price: 80 },
       { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
                  { name: "वडापाव", price: 15 },
           { name: "वडापाव", price: 15 },
            { name: "वडापाव", price: 15 },
             { name: "वडापाव", price: 15 },
              { name: "वडापाव", price: 15 },
               { name: "वडापाव", price: 15 },
                { name: "वडापाव", price: 15 },
                 { name: "वडापाव", price: 15 },
    ],
  },
];





export default function MenuPage() {
  return (
    <main className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-8 text-yellow-600">📋 Our Menu</h2>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {menu.map((section, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
              {section.category}
            </h3>
            <ul className="space-y-2 text-left">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b pb-2 text-gray-800"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
