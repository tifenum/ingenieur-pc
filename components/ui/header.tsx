"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down more than 120px (past the hero area top), trigger transparent mode
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 md:pt-6 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "opacity-25 hover:opacity-100 focus-within:opacity-100" 
          : "opacity-100"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative flex h-16 items-center justify-between rounded-3xl bg-gray-900/95 backdrop-blur-md border border-white/10 px-6 shadow-2xl">
          
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8 text-sm font-medium mx-auto">
            {/* 🔴 Added "/" before hashes so redirect routes correctly from any page level layout */}
            <Link href="/#accueil" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Accueil
            </Link>
            <Link href="/#Processus" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Processus
            </Link>
            <Link href="/#services" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Services
            </Link>
            <Link href="/marketplace" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Marketplace
            </Link>
            <Link href="/#avantages" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Pourquoi Nous
            </Link>
            <Link href="/#temoignages" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Avis
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-[#3B9EFF] transition-colors">
              Adresse
            </Link>
          </nav>

          {/* Spacer */}
          <div className="hidden md:block w-[42px]" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}