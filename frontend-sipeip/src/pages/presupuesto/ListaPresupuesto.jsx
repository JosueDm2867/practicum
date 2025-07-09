import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaPresupuesto = () => {
  const [presupuestos, setPresupuestos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/presupuestos")
      .then(res => setPresupuestos(res.data))
      .catch(err => console.error("Error al obtener presupuestos", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Eliminar presupuesto?")) {
      try {
        await axios.delete(`http://localhost:8080/api/presupuestos/${id}`);
        setPresupuestos(presupuestos.filter(p => p.idPresupuesto !== id));
      } catch (err) {
        console.error("Error al eliminar presupuesto", err);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Presupuestos</h1>
      <Link to="/presupuesto/nuevo" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">
        Nuevo Presupuesto
      </Link>
      <table className="w-full border table-auto">
        <thead>
          <tr>
            <th className="border px-2">Monto</th>
            <th className="border px-2">Periodo</th>
            <th className="border px-2">Unidad</th>
            <th className="border px-2">Proyecto</th>
            <th className="border px-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {presupuestos.map(p => (
            <tr key={p.idPresupuesto}>
              <td className="border px-2">{p.monto}</td>
              <td className="border px-2">{p.periodo}</td>
              <td className="border px-2">{p.unidad?.nombre || "—"}</td>
              <td className="border px-2">{p.proyecto?.nombre || "—"}</td>
              <td className="border px-2">
                <Link to={`/presupuesto/editar/${p.idPresupuesto}`} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">Editar</Link>
                <button onClick={() => handleEliminar(p.idPresupuesto)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPresupuesto;
