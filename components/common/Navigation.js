"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = ({ siteSetting = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link className="flex items-center space-x-3" href="/">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
                siteSetting.logo[0]?.url || ""
            }
            alt={siteSetting.company_name || "Company Logo"}
            width={50}
            height={50}
          />
          <span className="text-2xl font-bold text-gray-900">
            {siteSetting.company_name || "Company Name"}
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/services"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          <Link
            href="/members"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Members
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown - Conditionally rendered with a class based on state */}
      <div
        className="fixed hidden inset-0 w-full h-full bg-black/60 z-[99] cursor-pointer select-none"
        style={{ display: isMenuOpen ? "block" : "none" }}
        onClick={toggleMenu}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 mt-2">
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-center bg-gray-100"
          >
            Services
          </Link>
          <a
            href="/members"
            className="block px-3 py-2 rounded-md text-base font-medium text-center bg-gray-100"
          >
            Members
          </a>
          <a
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-center bg-gray-100"
          >
            Blog
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-center bg-gray-100"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-center bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
