"use client";

import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { JwtPayload } from "../interfaces/JwtPayload";

type MobileMenuProps = {
  user: JwtPayload | null;
  logout: () => void;
  menuItems: {
    label: string;
    icon: string;
    url: string;
  }[];
};

export default function MobileMenuToggle({ user, logout, menuItems }: MobileMenuProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setVisible(true)}
        className="md:hidden text-gray-700"
        title="menuButton"
      >
        <i className="pi pi-bars text-2xl"></i>
      </button>

      {/* Sidebar */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="pt-20"
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>

        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.url}
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <i className={item.icon}></i>
            {item.label}
          </a>
        ))}

        {user?.name && (
          <button
            onClick={logout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </Sidebar>
    </>
  );
}
