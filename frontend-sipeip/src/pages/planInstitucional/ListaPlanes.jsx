import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaPlanesInstitucionales = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/planes")
      .then(res => setPlanes(res.data))
      .catch(err => console.error("Error al obtener planes", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este plan?")) {
      await axios.delete(`http://localhost:8080/api/planes/${id}`);
      setPlanes(planes.filter(plan => plan.idPlanInstitucional !== id));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Planes Institucionales</h1>
      <Link to="/planes/nuevo" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">Nuevo Plan</Link>
      <table className="w-full border table-auto">
        <thead>
          <tr>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Entidad</th>
            <th className="border px-2 py-1">Estado</th>
            <th className="border px-2 py-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {planes.map(plan => (
            <tr key={plan.idPlanInstitucional}>
              <td className="border px-2 py-1">{plan.nombrePlan}</td>
              <td className="border px-2 py-1">{plan.entidad?.nombre || "—"}</td>
              <td className="border px-2 py-1">{plan.estado === 1 ? "Activo" : "Inactivo"}</td>
              <td className="border px-2 py-1">
                <Link to={`/planes/editar/${plan.idPlanInstitucional}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</Link>
                <button onClick={() => handleEliminar(plan.idPlanInstitucional)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPlanesInstitucionales;
