"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "NAET Therapy", href: "#naet" },
  { label: "Programmes", href: "#programmes" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5F0]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-wide transition-colors ${
            scrolled ? "text-[#2C2C2A]" : "text-white"
          }`}
        >
          Ruth Pottinger
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#4A6741] ${
                scrolled ? "text-[#2C2C2A]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/book"
            className="bg-[#4A6741] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#3d5636] transition-colors"
          >
            Book a Free Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-[#2C2C2A]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-[#e8e4df] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2C2C2A] text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/book"
            className="bg-[#4A6741] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-[#3d5636] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </header>
  );
}
