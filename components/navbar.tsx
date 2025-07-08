// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   const navItems = [
//     { label: "Home", href:"/home" },
//     { label: "Menu", href:"/menu" },
//     { label: "Pre-Order", href:"/preorder" },
//     { label: "Delivery", href:"/delivery" },
//     { label: "Contact", href:"/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 text-white z-50 shadow-md">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//         <h1 className="text-xl font-bold text-yellow-400">Hotel Chirag</h1>
//         <ul className="flex gap-6 text-sm sm:text-base">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={`hover:text-yellow-400 transition ${
//                   pathname === item.href ? "text-yellow-400 font-semibold" : ""
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
