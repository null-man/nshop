import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "NShop - Fashion Clothing Store",
  description: "Discover the latest fashion clothing and accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${playfairDisplay.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-[var(--muted)] py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About NShop</h3>
                <p className="text-sm">
                  Discover the latest fashion trends with our curated selection
                  of clothing and accessories.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-[var(--primary)]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-[var(--primary)]"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[var(--primary)]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[var(--primary)]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-sm">Email: info@nshop.com</p>
                <p className="text-sm">Phone: +1 (234) 567-8900</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-center text-sm">
                © 2024 NShop. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
