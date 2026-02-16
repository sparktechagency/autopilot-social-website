/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${scrolled && "backdrop-blur-xl bg-[#15141A]/30 shadow-lg"} px-6 py-4 sm:py-5 fixed w-full top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/Images/logo.png"
            alt="User Avatar"
            width={200}
            height={100}
            className="w-1/3 sm:w-full lg:w-1/2 h-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-2 glassBg py-2 rounded-full shadow-md">
            <Link
              href="/"
              className={`${scrolled ? "text-white" : "text-gray-600"} px-5 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 rounded-full transition-all duration-200`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`${scrolled ? "text-white" : "text-gray-600"} px-5 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 rounded-full transition-all duration-200`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`${scrolled ? "text-white" : "text-gray-600"} px-5 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 rounded-full transition-all duration-200`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`${scrolled ? "text-white" : "text-gray-600"} px-5 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 rounded-full transition-all duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* User Avatar - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 border-white shadow-md hover:scale-105 transition-transform duration-200">
            <Image
              src="/Images/testimonial.png"
              alt="User Avatar"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            href="/login"
            className="border border-[] text-[#191919] font-semibold px-4 py-1.5  rounded-2xl "
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white bg-linear-to-r from-[#0A0A0A] px-4 py-1.5 rounded-2xl  to-[#155DFC] font-semibold"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button & Avatar */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Avatar */}
          <div className="size-8 sm:size-10 rounded-full overflow-hidden cursor-pointer border-2 border-white shadow-md">
            <Image
              src="/Images/testimonial.png"
              alt="User Avatar"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center size-6 sm:size-10 bg-white rounded-lg cursor-pointer shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed mx-auto left-1/2 -translate-x-1/2 w-full px-5 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 mt-5" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <Link
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#business"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            My Business
          </Link>
        </div>
      </div>
    </nav>
  );
}
