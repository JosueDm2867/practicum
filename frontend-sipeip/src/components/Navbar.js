import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">
        SIPEIP - Sistema de Planificación
      </h1>
      <nav>
        <span className="text-gray-600">Usuario</span>
      </nav>
    </header>
  );
};

export default Navbar;
