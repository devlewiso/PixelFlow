"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, ChevronUp } from "lucide-react";
import Link from "next/link";

// Función throttle para limitar eventos (se mantiene igual pero se usa adecuadamente)
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > lastScrollTop;

      setIsHeaderHidden(isScrollingDown && currentScrollPos > 50);
      setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos);
    }, 100),
    [lastScrollTop]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(
    (event) => {
      event.preventDefault();
      setIsMenuOpen((prev) => !prev);
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
        isHeaderHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo o Marca */}
          <div className="text-xl font-bold text-gray-900">PixelFlow</div>

          {/* Navegación para Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" passHref legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                Home
              </a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                About
              </a>
            </Link>
          </nav>

          {/* Botón del Menú Móvil */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navegación para Móvil */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <Link href="/" passHref legacyBehavior>
              <a className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out">
                Home
              </a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out">
                About
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
