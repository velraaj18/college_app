"use client";

import { useRef } from "react";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
import { useAuth } from "../services/AuthContext";
import MobileMenu from "./MobileMenuToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const menu = useRef<Menu>(null);

  const menuItems = [
    { label: "Home", icon: "pi pi-home", url: "/" },
    { label: "Courses", icon: "pi pi-book", url: "/courses" },
    { label: "Admissions", icon: "pi pi-id-card", url: "/admissions" },
    { label: "Students", icon: "pi pi-users", url: "/students" },
    { label: "Contact", icon: "pi pi-envelope", url: "/contact" },
  ];

  const profileMenu = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => logout(),
    },
  ];

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <i className="pi pi-building text-2xl text-gray-700"></i>
        <h1 className="text-xl font-bold text-gray-800">My College</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item) => (
          <a key={item.label} href={item.url} className="hover:text-blue-600">
            {item.label}
          </a>
        ))}
      </div>

      {/* Profile Dropdown (desktop) */}
      <div className="hidden md:flex items-center gap-2">
        <Menu model={profileMenu} popup ref={menu} />

        <div
          onClick={(e) => menu.current && menu.current.toggle(e)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Avatar
            label={(user?.name?.charAt(0) ?? "U").toUpperCase()}
            shape="circle"
          />
          <span>{user ? user.name : "Login"}</span>
          <i className="pi pi-chevron-down text-gray-700"></i>
        </div>
      </div>

      {/* Mobile */}
      <MobileMenu user={user} logout={logout} menuItems={menuItems} />
    </nav>
  );
}
