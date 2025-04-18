import {Geist, Geist_Mono, Birthstone} from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Navbar from "@/app/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const birthstone = Birthstone({
  variable: "--font-birthstone",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Sheryl Azzam",
  description: "This website was built in memory of Sheryl Azzam",
};

export default function RootLayout({children}) {

  return (
    <html lang="en">

    <body className={`${geistSans.variable} ${geistMono.variable} ${birthstone.variable} antialiased`}>

    <Image
      src="/Texture.jpg"
      alt="Background"
      className="w-full h-full fixed bg-cover z-0 opacity-30 object-cover"
      width={7000}
      height={4667}
      priority
    />

    <div className="w-full absolute">
      <Navbar/>

      {/* PAGE CONTENT */}
      {children}

      <footer className="pt-20">
        <p className="text-lg text-center m-8">
          Made with ❤ by the Azzam family
        </p>
      </footer>
    </div>

    </body>
    </html>
  );
}
