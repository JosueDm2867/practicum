import { Link } from "react-router-dom";
import React, { useState } from "react";

const Sidebar = () => {
  const [openInstitucional, setOpenInstitucional] = useState(false);
  const [openAcceso, setOpenAcceso] = useState(false);
  const [openEstrategica, setOpenEstrategica] = useState(false);
  const [openProyectos, setOpenProyectos] = useState(false);
  const [openReportes, setOpenReportes] = useState(false);

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <nav className="space-y-4">

        <div>
          <button
            onClick={() => setOpenInstitucional(!openInstitucional)}
            className="w-full text-left font-semibold text-gray-300 hover:text-white"
          >
            Gestión Institucional
          </button>
          {openInstitucional && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/entidades" className="block hover:bg-gray-700 p-2 rounded">Entidades</Link>
              <Link to="/unidades" className="block hover:bg-gray-700 p-2 rounded">Unidades Organizacionales</Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenAcceso(!openAcceso)}
            className="w-full text-left font-semibold text-gray-300 hover:text-white"
          >
            Gestión de Acceso
          </button>
          {openAcceso && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/usuarios" className="block hover:bg-gray-700 p-2 rounded">Usuarios</Link>
              <Link to="/roles" className="block hover:bg-gray-700 p-2 rounded">Roles</Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenEstrategica(!openEstrategica)}
            className="w-full text-left font-semibold text-gray-300 hover:text-white"
          >
            Planificación Estratégica
          </button>
          {openEstrategica && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/planes" className="block hover:bg-gray-700 p-2 rounded">Plan Institucional</Link>
              <Link to="/objetivos" className="block hover:bg-gray-700 p-2 rounded">Objetivos Estratégicos</Link>
              <Link to="/metas" className="block hover:bg-gray-700 p-2 rounded">Metas</Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenProyectos(!openProyectos)}
            className="w-full text-left font-semibold text-gray-300 hover:text-white"
          >
            Proyectos y Presupuesto
          </button>
          {openProyectos && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/programas" className="block hover:bg-gray-700 p-2 rounded">Programas</Link>
              <Link to="/actividades" className="block hover:bg-gray-700 p-2 rounded">Actividades Operativas</Link>
              <Link to="/proyectos" className="block hover:bg-gray-700 p-2 rounded">Proyectos de Inversión</Link>
              <Link to="/presupuesto" className="block hover:bg-gray-700 p-2 rounded">Presupuesto</Link>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setOpenReportes(!openReportes)}
            className="w-full text-left font-semibold text-gray-300 hover:text-white"
          >
            Reportes
          </button>
          {openReportes && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/reporte-proyectos" className="block hover:bg-gray-700 p-2 rounded">
                Reporte de Proyectos
              </Link>
              <Link to="/reporte-usuarios" className="block hover:bg-gray-700 p-2 rounded">
                Reporte de Usuarios
              </Link>
            </div>
          )}
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
