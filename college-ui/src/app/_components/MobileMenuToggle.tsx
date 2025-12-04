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
    url?: string;
    children?: {
      label: string;
      icon: string;
      url: string;
    }[];
  }[];
};

export default function MobileMenuToggle({
  user,
  logout,
  menuItems,
}: MobileMenuProps) {
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
          <div key={item.label} className="mb-2">
            {/* Parent item */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md">
              <div className="flex items-center gap-3">
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </div>

              {/* Show arrow only if children exist */}
              {item.children && <i className="pi pi-chevron-down"></i>}
            </div>

            {/* Children list */}
            {item.children && (
              <div className="ml-6 mt-1">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.url}
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    <i className={child.icon}></i>
                    {child.label}
                  </a>
                ))}
              </div>
            )}

            {/* Parent link (only if no children) */}
            {!item.children && (
              <a
                href={item.url}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <i className={item.icon}></i>
                {item.label}
              </a>
            )}
          </div>
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
