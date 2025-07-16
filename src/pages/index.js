import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} h-screen flex justify-center items-center ${geistMono.className} font-sans `}
    >
      <div className="text-center">
        <h1 className="text-6xl">Deploy on Vercel</h1>
        <p className="mt-5">-With CraftCode</p>
      </div>
    </div>
  );
}
