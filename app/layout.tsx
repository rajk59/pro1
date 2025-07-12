
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Hotel Chirag",
  description: "Small hotel website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Navbar */}
        <nav className="bg-yellow-200 p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Hotel chirag🍛 </h1>
            <div className="space-x-4">
              <Link href="/home" className="hover:underline">Home</Link>
              <Link href="/menu" className="hover:underline">Menu</Link>
              <Link href="/delivery" className="hover:underline">Delivery</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* ✅ Footer (optional) */}
        {/* <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
          © 2025 Hotel Chirag. All rights reserved.
        </footer> */}
      </body>
    </html>
  );
}


