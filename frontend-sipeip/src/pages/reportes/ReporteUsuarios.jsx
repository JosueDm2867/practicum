import React, { useEffect, useState } from "react";
import axios from "axios";

const ReporteUsuarios = () => {
  const [reporte, setReporte] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/usuarios/reporte")
      .then(res => setReporte(res.data))
      .catch(err => {
        setError("Error al obtener el reporte");
        console.error(err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Reporte de Usuarios por Rol y Estado</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Rol</th>
            <th className="py-2 px-4 border">Estado</th>
            <th className="py-2 px-4 border">Total Usuarios</th>
          </tr>
        </thead>
        <tbody>
          {reporte.length > 0 ? (
            reporte.map((item, idx) => (
              <tr key={idx}>
                <td className="py-2 px-4 border">{item.nombreRol}</td>
                <td className="py-2 px-4 border">{item.estado}</td>
                <td className="py-2 px-4 border text-center">{item.totalUsuarios}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-2 px-4 border text-center">No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteUsuarios;
