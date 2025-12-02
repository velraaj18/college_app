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
    { label: "About", icon: "pi pi-home", url: "/" },
    { label: "School Programs", icon: "pi pi-book", url: "/courses" },
    { label: "Community Life", icon: "pi pi-id-card", url: "/admissions" },
    { label: "Admissions", icon: "pi pi-users", url: "/students" },
    { label: "Giving", icon: "pi pi-envelope", url: "/contact" },
  ];

  const profileMenu = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => logout(),
    },
  ];

  return (
    <>
      <div className=" fixed z-9999 w-full">
        <div className="headerUtilitybar "></div>
        <nav className="w-full bg-white shadow-md px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-20">
            <div className=" flex items-center justify-center top-0 z-50">
              <a href="/" title="logo">
                <img src="/images/logo.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="w-2/4 flex items-center justify-around">
            <div className="hidden md:flex items-center gap-10">
              {menuItems.map((item) => (
                <a key={item.label} href={item.url} className="">
                  <span className="hover:text-[#6ca643] text-[#757782] text-lg uppercase">
                    {item.label}
                  </span>
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
          </div>

          {/* Mobile */}
          <MobileMenu user={user} logout={logout} menuItems={menuItems} />
        </nav>
      </div>
    </>
  );
}
