import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded transition-colors duration-200 ${
          isActive ? "bg-gray-700" : "hover:bg-gray-700"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
