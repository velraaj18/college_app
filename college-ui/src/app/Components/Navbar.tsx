"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* College Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/college-logo.png" // replace with logo file
            alt="College Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">My College</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Courses", "Admissions", "Students", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Profile */}
        <div className="hidden md:flex items-center space-x-3">
          <Image
            src="/profile.jpg" // temporary profile picture
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full border border-gray-300"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {["Home", "Courses", "Admissions", "Students", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
