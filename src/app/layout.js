import {Crimson_Pro, Birthstone} from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Navbar from "@/app/components/navbar";

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

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
    <html lang="en" className={crimsonPro.className}>
    <body className="antialiased">

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
