import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaUnidades = () => {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    cargarUnidades();
  }, []);

  const cargarUnidades = () => {
    axios
      .get("http://localhost:8080/api/unidades")
      .then((res) => setUnidades(res.data))
      .catch((err) => console.error("Error al obtener unidades", err));
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar esta unidad?")) {
      try {
        await axios.delete(`http://localhost:8080/api/unidades/${id}`);
        setUnidades(unidades.filter((u) => u.idUnidadOrganizacional !== id));
      } catch (err) {
        console.error("Error al eliminar unidad", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Unidades Organizacionales</h1>

      <Link
        to="/unidades/nueva"
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Nueva Unidad
      </Link>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Responsable</th>
            <th className="border px-4 py-2">Entidad</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unidades.map((u) => (
            <tr key={u.idUnidadOrganizacional}>
              <td className="border px-4 py-2">{u.nombre}</td>
              <td className="border px-4 py-2">{u.responsable || "—"}</td>
              <td className="border px-4 py-2">{u.entidad?.nombre || "—"}</td>
              <td className="border px-4 py-2">{u.estado}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/unidades/editar/${u.idUnidadOrganizacional}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleEliminar(u.idUnidadOrganizacional)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUnidades;
