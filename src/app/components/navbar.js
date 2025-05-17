"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Gallery', href: '/gallery'},
  {name: 'Legacy', href: '/legacy'},
]

function BookmarkNavLink({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;

  const spanClass = [
    "relative z-10 block font-medium",
    "px-4 md:px-5 pb-2 md:pb-4 pt-4 md:pt-6",
    active ? "text-white" : "text-gray-800 group-hover:text-red-700",
  ].join(" ");

  const svgClass = [
    "absolute inset-0 h-full w-full opacity-50 ",
    active
      ? "fill-red-700"
      : "fill-transparent group-hover:fill-red-100 dark:group-hover:fill-red-800/40",
  ].join(" ");

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative mx-1 inline-block transition focus:outline-none"
    >
      {/* Text layer */}
      <span
        className={spanClass}
        style={{ fontSize: "18px", lineHeight: 1.3 }}
      >
        {label}
      </span>

      {/* SVG bookmark */}
      <svg
        viewBox="0 0 10 20"
        preserveAspectRatio="none"
        className={svgClass}
        aria-hidden="true"
        style={{
          transform: `scale(0.8, 2)`,
          transformOrigin: "center",
        }}
      >
        <path
          d="M10 2 L10 18.998 C10 19.889 8.923 20.335 8.293 19.705 L5.707 17.119 C5.317 16.729 4.683 16.729 4.293 17.119 L1.707 19.705 C1.077 20.335 0 19.889 0 18.998 L0 2 C0 0.895 0.895 0 2 0 L8 0 C9.105 0 10 0.895 10 2 Z"
          vectorEffect="non-scaling-stroke"
          stroke="none"
          strokeWidth={0}
        />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="absolute w-full md:w-auto mt-2 md:mt-1 flex md:inline md:mx-5">
      <div className="mx-auto md:mx-0">
        {navigation.map((item) => (
          <BookmarkNavLink key={item.name} href={item.href} label={item.name} />
        ))}
      </div>
    </nav>
  );
}
