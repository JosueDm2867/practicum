import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/proyectos")
      .then((res) => setProyectos(res.data))
      .catch((err) => console.error("Error al obtener proyectos", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este proyecto?")) {
      try {
        await axios.delete(`http://localhost:8080/api/proyectos/${id}`);
        setProyectos(proyectos.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error al eliminar proyecto", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Proyectos de Inversión</h1>
      <Link
        to="/proyectos/nuevo"
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Nuevo Proyecto
      </Link>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Código</th>
            <th className="border px-4 py-2">Monto</th>
            <th className="border px-4 py-2">Fecha Inicio</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((p) => (
            <tr key={p.idProyecto}>
              <td className="border px-4 py-2">{p.nombre}</td>
              <td className="border px-4 py-2">{p.codigo}</td>
              <td className="border px-4 py-2">{p.monto}</td>
              <td className="border px-4 py-2">{p.fechaInicio}</td>
              <td className="border px-4 py-2">{p.estado}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/proyectos/editar/${p.idProyecto}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleEliminar(p.idProyecto)}
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

export default ListaProyectos;
