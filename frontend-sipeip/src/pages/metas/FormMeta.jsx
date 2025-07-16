import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormMeta = () => {
  const [meta, setMeta] = useState({
    descripcion: "",
    estado: 1,
    unidadMedida: "",
    valorInicial: "",
    valorObjetivo: "",
    planInstitucional: { idPlanInstitucional: "" },
    proyecto: { idProyecto: "" }
  });

  const [planes, setPlanes] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/planes").then(res => setPlanes(res.data));
    axios.get("http://localhost:8080/api/proyectos").then(res => setProyectos(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/metas/${id}`)
        .then(res => setMeta(res.data))
        .catch(err => console.error("Error al cargar meta", err));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "planInstitucional") {
      setMeta({ ...meta, planInstitucional: { idPlanInstitucional: parseInt(value) } });
    } else if (name === "proyecto") {
      setMeta({ ...meta, proyecto: { idProyecto: parseInt(value) } });
    } else {
      setMeta({ ...meta, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = id ? `http://localhost:8080/api/metas/${id}` : "http://localhost:8080/api/metas";
    const method = id ? axios.put : axios.post;

    try {
      await method(url, meta);
      navigate("/metas");
    } catch (err) {
      console.error("Error al guardar meta", err);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar" : "Nueva"} Meta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="descripcion" placeholder="Descripción" value={meta.descripcion} onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="unidadMedida" placeholder="Unidad de medida" value={meta.unidadMedida} onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="valorInicial" placeholder="Valor inicial" value={meta.valorInicial} onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="valorObjetivo" placeholder="Valor objetivo" value={meta.valorObjetivo} onChange={handleChange} className="w-full border p-2" />

        <select name="planInstitucional" value={meta.planInstitucional.idPlanInstitucional || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona un Plan Institucional</option>
          {planes.map(plan => (
            <option key={plan.idPlanInstitucional} value={plan.idPlanInstitucional}>{plan.nombrePlan}</option>
          ))}
        </select>

        <select name="proyecto" value={meta.proyecto.idProyecto || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona un Proyecto</option>
          {proyectos.map(proy => (
            <option key={proy.idProyecto} value={proy.idProyecto}>{proy.nombre}</option>
          ))}
        </select>

        <select name="estado" value={meta.estado} onChange={handleChange} className="w-full border p-2">
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormMeta;
