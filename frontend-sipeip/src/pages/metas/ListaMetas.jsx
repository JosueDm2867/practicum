import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaMetas = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/metas")
      .then(res => setMetas(res.data))
      .catch(err => console.error("Error al cargar metas", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Eliminar esta meta?")) {
      try {
        await axios.delete(`http://localhost:8080/api/metas/${id}`);
        setMetas(metas.filter(m => m.idMeta !== id));
      } catch (err) {
        console.error("Error al eliminar", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Metas</h1>
      <Link to="/metas/nuevo" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">
        Crear Nueva Meta
      </Link>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Descripción</th>
            <th className="border px-4 py-2">Unidad</th>
            <th className="border px-4 py-2">Valor Objetivo</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {metas.map((meta) => (
            <tr key={meta.idMeta}>
              <td className="border px-4 py-2">{meta.descripcion}</td>
              <td className="border px-4 py-2">{meta.unidadMedida}</td>
              <td className="border px-4 py-2">{meta.valorObjetivo}</td>
              <td className="border px-4 py-2">
                <Link to={`/metas/editar/${meta.idMeta}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</Link>
                <button onClick={() => handleEliminar(meta.idMeta)} className="bg-red-600 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaMetas;
