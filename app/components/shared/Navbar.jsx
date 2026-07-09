"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/public/gooblique-logo.png";
import Image from "next/image";
import { LuBell, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/your-username/30min";

  const routes = [
    { name: "Home", href: "/" },
    { name: "Our Gallery", href: "/gallery" },
    { name: "Request a Demo", href: "/request-demo" },
  ];

  const handleScheduleCall = () => {
    if (typeof window !== "undefined") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 block">
      <div
        className={`mx-auto max-w-[1500px] px-3 py-3 transition-all duration-300 sm:px-4 lg:px-5 lg:py-4 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}>
        <div className="rounded-full border border-white/10 bg-[#010205]/70 px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md lg:px-6 lg:py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  alt="gooblique logo"
                  width={0}
                  height={0}
                  className="h-5 w-auto"
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:gap-16">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  target={route.isExternal ? "_blank" : undefined}
                  rel={route.isExternal ? "noopener noreferrer" : undefined}
                  className={`text-sm font-semibold text-white transition hover:text-[#8955E2] ${
                    pathname === route.href ? "font-semibold underline" : ""
                  }`}>
                  {route.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:gap-5">
              <button
                type="button"
                onClick={handleScheduleCall}
                className="hidden rounded-[50px] border border-slate-500 px-3 py-2 text-sm font-bold text-white sm:px-4 lg:block lg:px-7 lg:py-2 lg:text-md">
                Schedule Call
              </button>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="rounded-full bg-[#8955E2] p-2.5 lg:p-3">
                <LuMenu className="text-lg text-white lg:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          isDrawerOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}>
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 flex h-full w-72 flex-col gap-6 border-r border-white/10 bg-[#010205]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsDrawerOpen(false)}>
              <Image
                src={logo}
                alt="gooblique logo"
                width={0}
                height={0}
                className="h-5 w-auto"
              />
            </Link>
            <button type="button" onClick={() => setIsDrawerOpen(false)}>
              <LuX className="text-2xl text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                target={route.isExternal ? "_blank" : undefined}
                rel={route.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setIsDrawerOpen(false)}
                className={`rounded-xl px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:text-[#8955E2] ${
                  pathname === route.href ? "bg-white/10 text-[#8955E2]" : ""
                }`}>
                {route.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setIsDrawerOpen(false);
              handleScheduleCall();
            }}
            className="mt-auto rounded-[50px] border border-slate-500 px-4 py-3 text-sm font-bold text-white">
            Schedule Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
