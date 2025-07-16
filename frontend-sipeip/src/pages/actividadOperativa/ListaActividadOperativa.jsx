import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaActividadOperativa = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/actividades-operativas")
      .then(res => setActividades(res.data))
      .catch(err => console.error("Error al listar actividades:", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta actividad?")) {
      try {
        await axios.delete(`http://localhost:8080/api/actividades-operativas/${id}`);
        setActividades(actividades.filter(act => act.idActividad !== id));
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Actividades Operativas</h2>
      <Link to="/actividades/nueva" className="bg-green-600 text-white px-4 py-2 rounded inline-block mb-4">
        Nueva Actividad
      </Link>

      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border px-2">Descripción</th>
            <th className="border px-2">Fecha</th>
            <th className="border px-2">Meta</th>
            <th className="border px-2">Usuario</th>
            <th className="border px-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((act) => (
            <tr key={act.idActividad}>
              <td className="border px-2">{act.descripcion}</td>
              <td className="border px-2">{act.fecha}</td>
              <td className="border px-2">{act.meta?.descripcion || "—"}</td>
              <td className="border px-2">{act.usuario?.nombre || "—"}</td>
              <td className="border px-2">
                <Link to={`/actividades/editar/${act.idActividad}`} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">
                  Editar
                </Link>
                <button onClick={() => handleEliminar(act.idActividad)} className="bg-red-600 text-white px-2 py-1 rounded">
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

export default ListaActividadOperativa;
