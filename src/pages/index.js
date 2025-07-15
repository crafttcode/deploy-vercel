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
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="text-6xl">Welcome back to CraftCode 🚀🚀🚀</h1>
    </div>
  );
}
