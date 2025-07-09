import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormPresupuesto = () => {
  const [presupuesto, setPresupuesto] = useState({
    monto: "",
    periodo: "",
    unidad: { idUnidadOrganizacional: "" },
    proyecto: { idProyecto: "" },
  });

  const [unidades, setUnidades] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/unidades").then(res => setUnidades(res.data));
    axios.get("http://localhost:8080/api/proyectos").then(res => setProyectos(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/presupuestos/${id}`)
        .then(res => setPresupuesto(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "unidad") {
      setPresupuesto({ ...presupuesto, unidad: { idUnidadOrganizacional: value } });
    } else if (name === "proyecto") {
      setPresupuesto({ ...presupuesto, proyecto: { idProyecto: value } });
    } else {
      setPresupuesto({ ...presupuesto, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? axios.put : axios.post;
    const url = id
      ? `http://localhost:8080/api/presupuestos/${id}`
      : "http://localhost:8080/api/presupuestos";

    try {
      await method(url, presupuesto);
      navigate("/presupuestos");
    } catch (err) {
      console.error("Error al guardar presupuesto", err);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar" : "Nuevo"} Presupuesto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="number" name="monto" value={presupuesto.monto} onChange={handleChange} placeholder="Monto" className="w-full border p-2" required />
        <input type="date" name="periodo" value={presupuesto.periodo} onChange={handleChange} className="w-full border p-2" required />

        <select name="unidad" value={presupuesto.unidad.idUnidadOrganizacional || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Unidad</option>
          {unidades.map(u => (
            <option key={u.idUnidadOrganizacional} value={u.idUnidadOrganizacional}>
              {u.nombre}
            </option>
          ))}
        </select>

        <select name="proyecto" value={presupuesto.proyecto.idProyecto || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Proyecto</option>
          {proyectos.map(p => (
            <option key={p.idProyecto} value={p.idProyecto}>
              {p.nombre}
            </option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormPresupuesto;
