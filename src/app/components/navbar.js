"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Gallery', href: '/gallery'},
  {name: 'Archive', href: '/archive'},
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute mt-2 md:mt-5 w-full flex md:w-auto md:mx-5 md:inline">
      <div className="mx-auto md:mx-0">
        {
          navigation.map((item) => {
            const isActive = pathname === item.href;

            let styles = "text-lg md:text-xl px-4 pb-2 md:px-5 md:pb-5 pt-20 m-3 rounded-2xl transition "

            if (isActive) {
              styles += "bg-red-700"
            } else {
              styles += "hover:text-red-700"
            }

            return (
              <Link key={item.name} href={item.href} className={styles}>
                {item.name}
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}