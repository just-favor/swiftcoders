"use client";
import { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Our Work" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 text-white bg-gray-600/20 backdrop-blur-2xl border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between py-4">
            <h1 className="text-4xl font-bold">Swift<span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">Coders</span></h1>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-4 text-lg font-semibold">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <span key={l.href} className="flex items-center gap-4">
                    <Link
                      href={l.href}
                      className={`transition-colors ${
                        active
                          ? "bg-gradient-to-b from-[cyan] to-blue-500 bg-clip-text text-transparent border-b border-blue-500 pb-0.5"
                          : "text-white/80 hover:text-cyan-300"
                      }`}
                    >
                      {l.label}
                    </Link>
                    {i < links.length - 1 && <span className="opacity-40"></span>}
                  </span>
                );
              })}
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </Container>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-black/40 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="flex flex-col gap-6 mt-24 px-8 text-xl font-semibold">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`transition-colors ${
                  active
                    ? "text-cyan-400 border-l-4 border-cyan-400 pl-3"
                    : "text-white/80 hover:text-cyan-300 pl-3"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}