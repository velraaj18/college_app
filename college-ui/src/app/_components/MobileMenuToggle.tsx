"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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
    </>
  );
}
