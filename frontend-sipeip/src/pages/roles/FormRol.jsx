import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaRoles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/roles")
      .then((res) => setRoles(res.data))
      .catch((err) => console.error("Error al obtener roles", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este rol?")) {
      try {
        await axios.delete(`http://localhost:8080/api/roles/${id}`);
        setRoles(roles.filter((r) => r.id !== id));
      } catch (err) {
        console.error("Error al eliminar rol", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Roles</h1>

      <Link
        to="/roles/nuevo"
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Crear nuevo rol
      </Link>

      <table className="table-auto w-full border text-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Descripción</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((rol) => (
            <tr key={rol.id}>
              <td className="border px-4 py-2">{rol.nombre}</td>
              <td className="border px-4 py-2">{rol.descripcion}</td>
              <td className="border px-4 py-2">{rol.estado}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/roles/editar/${rol.id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleEliminar(rol.id)}
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

export default ListaRoles;
