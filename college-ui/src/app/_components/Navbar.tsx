"use client"

import MobileMenuToggle from "./MobileMenuToggle"; // client component
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../services/AuthContext";

export default function Navbar() {
  const {user, logout} = useAuth();
  return (
    <nav className="w-full bg-white shadow-md top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* College Logo */}
        <div className="flex items-center space-x-2">
          <BuildingLibraryIcon className="h-6 w-6 text-gray-700"/>
          <h1 className="text-xl font-bold text-gray-800">My College</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Login", "Courses", "Admissions", "Students", "Contact"].map((item) => (
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
          <UserCircleIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xl font-bold text-gray-800"> {user? `${user.name}` : "Login"} </span>
          {user && <button type="button" onClick={logout}>Logout</button>}
        </div>
        {/* Mobile Menu Button (Client Component) */}
        <MobileMenuToggle />
      </div>
    </nav>
  );
}
