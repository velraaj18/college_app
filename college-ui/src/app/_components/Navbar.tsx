import Image from "next/image";
import MobileMenuToggle from "./MobileMenuToggle"; // client component

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* College Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/college-logo.png"
            alt="College Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
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
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full border border-gray-300"
          />
        </div>

        {/* Mobile Menu Button (Client Component) */}
        <MobileMenuToggle />
      </div>
    </nav>
  );
}
