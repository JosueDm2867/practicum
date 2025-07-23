import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = () => {
    axios
      .get("http://localhost:8080/api/usuarios")
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error("Error al obtener usuarios", err));
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este usuario?")) {
      try {
        await axios.delete(`http://localhost:8080/api/usuarios/${id}`);
        setUsuarios(usuarios.filter((u) => u.id !== id));
      } catch (err) {
        console.error("Error al eliminar usuario", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>

      <div className="flex items-center gap-2 mb-4">
        <Link
          to="/usuarios/nuevo"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Nuevo
        </Link>
      </div>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Apellido</th>
            <th className="border px-4 py-2">Cédula</th>
            <th className="border px-4 py-2">Correo</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Rol</th> {/* Nueva columna */}
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="border px-4 py-2">{usuario.nombre}</td>
              <td className="border px-4 py-2">{usuario.apellido}</td>
              <td className="border px-4 py-2">{usuario.cedula}</td>
              <td className="border px-4 py-2">{usuario.correo}</td>
              <td className="border px-4 py-2">{usuario.estado}</td>
              <td className="border px-4 py-2">
                {usuario.rol?.nombre || "—"}
              </td>
              <td className="border px-4 py-2">
                <Link
                  to={`/usuarios/editar/${usuario.id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleEliminar(usuario.id)}
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

export default ListaUsuarios;