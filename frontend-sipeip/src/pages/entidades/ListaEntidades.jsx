import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListaEntidades() {
  const [entidades, setEntidades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/entidades")
      .then(response => setEntidades(response.data))
      .catch(error => console.error("Error al obtener entidades", error));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta entidad?")) {
      try {
        await axios.delete(`http://localhost:8080/api/entidades/${id}`);
        setEntidades(entidades.filter(e => e.idEntidad !== id));
      } catch (error) {
        console.error("Error al eliminar entidad", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Entidades</h1>
      <Link to="/entidades/nuevo" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Crear Nueva Entidad
      </Link>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Código</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Subsector</th>
            <th className="px-4 py-2 border">Nivel Gobierno</th>
            <th className="px-4 py-2 border">Estado</th>
            <th className="px-4 py-2 border">Fecha Creación</th>
            <th className="px-4 py-2 border">Fecha Actualización</th>
            <th className="px-4 py-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entidades.map(entidad => (
            <tr key={entidad.idEntidad}>
              <td className="border px-4 py-2">{entidad.codigo}</td>
              <td className="border px-4 py-2">{entidad.nombre}</td>
              <td className="border px-4 py-2">{entidad.subsector}</td>
              <td className="border px-4 py-2">{entidad.nivelGobierno}</td>
              <td className="border px-4 py-2">{entidad.estado}</td>
              <td className="border px-4 py-2">{new Date(entidad.fechaCreacion).toLocaleString()}</td>
              <td className="border px-4 py-2">{new Date(entidad.fechaActualizacion).toLocaleString()}</td>
              <td className="border px-4 py-2">
                <Link to={`/entidades/editar/${entidad.idEntidad}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</Link>
                <button
                  onClick={() => handleEliminar(entidad.idEntidad)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
