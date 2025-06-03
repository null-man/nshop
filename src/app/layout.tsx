import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NShop - 时尚服装购物网站",
  description: "发现最新的时尚服装和配饰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 py-6 mt-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">
              © 2024 NShop. 保留所有权利。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
