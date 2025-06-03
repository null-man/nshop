import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 py-6 mt-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">
              © 2024 NShop. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
