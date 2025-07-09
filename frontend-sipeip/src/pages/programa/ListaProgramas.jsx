import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaProgramas = () => {
  const [programas, setProgramas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/programas")
      .then(res => setProgramas(res.data))
      .catch(err => console.error("Error al obtener programas", err));
  }, []);

  const eliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este programa?")) {
      await axios.delete(`http://localhost:8080/api/programas/${id}`);
      setProgramas(programas.filter(p => p.idPrograma !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Programas</h1>
      <Link to="/programas/nuevo" className="bg-green-600 text-white px-4 py-2 rounded">Nuevo</Link>
      <table className="table-auto w-full mt-4 border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Entidad</th>
            <th className="border px-2 py-1">Proyecto</th>
            <th className="border px-2 py-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {programas.map(p => (
            <tr key={p.idPrograma}>
              <td className="border px-2 py-1">{p.nombrePrograma}</td>
              <td className="border px-2 py-1">{p.entidad?.nombre || "—"}</td>
              <td className="border px-2 py-1">{p.proyecto?.nombreProyecto || "—"}</td>
              <td className="border px-2 py-1">
                <Link to={`/programas/editar/${p.idPrograma}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</Link>
                <button onClick={() => eliminar(p.idPrograma)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProgramas;
