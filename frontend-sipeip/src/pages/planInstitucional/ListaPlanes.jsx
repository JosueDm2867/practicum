import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaPlanes = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/planes")
      .then(res => setPlanes(res.data))
      .catch(err => console.error("Error al obtener los planes", err));
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este plan?")) {
      try {
        await axios.delete(`http://localhost:8080/api/planes/${id}`);
        setPlanes(planes.filter(p => p.idPlan !== id));
      } catch (err) {
        console.error("Error al eliminar el plan", err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Planes Institucionales</h1>
      <Link to="/planes/nuevo" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Crear nuevo plan
      </Link>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Entidad</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Fechas</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {planes.map(plan => (
            <tr key={plan.idPlan}>
              <td className="border px-4 py-2">{plan.nombrePlan}</td>
              <td className="border px-4 py-2">{plan.entidad?.nombre}</td>
              <td className="border px-4 py-2">{plan.estado}</td>
              <td className="border px-4 py-2">{plan.fechaInicio} a {plan.fechaFin}</td>
              <td className="border px-4 py-2">
                <Link to={`/planes/editar/${plan.idPlan}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</Link>
                <button onClick={() => handleEliminar(plan.idPlan)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPlanes;
