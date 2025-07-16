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
        setMetas(metas.filter(meta => meta.idMeta !== id));
      } catch (err) {
        console.error("Error al eliminar", err);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Metas</h1>
      <Link to="/metas/nueva" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">Nueva Meta</Link>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2">Descripción</th>
            <th className="border px-2">Valor Inicial</th>
            <th className="border px-2">Valor Objetivo</th>
            <th className="border px-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {metas.map(meta => (
            <tr key={meta.idMeta}>
              <td className="border px-2">{meta.descripcion}</td>
              <td className="border px-2">{meta.valorInicial}</td>
              <td className="border px-2">{meta.valorObjetivo}</td>
              <td className="border px-2">
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
