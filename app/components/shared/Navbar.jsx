"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/public/nujax.svg";
import Image from "next/image";
import { LuBell } from "react-icons/lu";

const Navbar = () => {
  const pathname = usePathname();

  // Capitalize and remove slashes from route name
  const routes = [
    { name: "Solutions", href: "/solutions" },
    { name: "Our Gallery", href: "/gallery" },
    { name: "Request a Demo", href: "/demo" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <nav className="max-w-[1500px] mx-auto px-5 py-7 flex items-center justify-between">
      {/* Left: Logo */}
      <div>
        <Link href="/">
          <Image src={logo} alt="nujax logo" width={120} height={32}></Image>
        </Link>
      </div>

      {/* Center: Route name */}
      <div className="flex gap-16">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-white text-sm font-semibold hover:text-[#EC4845] transition ${
              pathname === route.href ? "font-semibold underline" : ""
            }`}>
            {route.name}
          </Link>
        ))}
      </div>

      {/* Right: Button */}
      <div className="flex gap-5">
        <button className="px-7 py-3 border text-white rounded-[50px] font-bold text-base">
          Schedule Call
        </button>
        <div className="bg-[#EC4845] p-4 rounded-full">
          <LuBell className="text-white text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
