import React, { useEffect, useState } from "react";
import axios from "axios";

const ReporteProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/proyectos/reporte")
      .then((res) => {
        setProyectos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener reporte de proyectos", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando reporte de proyectos...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Reporte de Proyectos</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Entidad</th>
            <th className="border px-2 py-1">Estado</th>
            <th className="border px-2 py-1">Responsable</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No hay proyectos</td>
            </tr>
          ) : (
            proyectos.map((p) => (
              <tr key={p.idProyecto}>
                <td className="border px-2 py-1">{p.idProyecto}</td>
                <td className="border px-2 py-1">{p.nombre}</td>
                <td className="border px-2 py-1">{p.entidadNombre}</td>
                <td className="border px-2 py-1">{p.estado}</td>
                <td className="border px-2 py-1">{p.responsableNombre}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteProyectos;
