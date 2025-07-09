import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormMeta = () => {
  const [meta, setMeta] = useState({
    descripcion: "",
    unidadMedida: "",
    valorInicial: "",
    valorObjetivo: "",
    estado: 1,
    plan: { idPlan: "" },
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
      axios.get(`http://localhost:8080/api/metas/${id}`).then(res => setMeta(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "idPlan") {
      setMeta({ ...meta, plan: { idPlan: parseInt(value) } });
    } else if (name === "idProyecto") {
      setMeta({ ...meta, proyecto: { idProyecto: parseInt(value) } });
    } else {
      setMeta({ ...meta, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? axios.put : axios.post;
    const url = id ? `http://localhost:8080/api/metas/${id}` : "http://localhost:8080/api/metas";
    try {
      await method(url, meta);
      navigate("/metas");
    } catch (err) {
      console.error("Error al guardar meta", err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Meta" : "Nueva Meta"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="descripcion" value={meta.descripcion} onChange={handleChange} placeholder="Descripción" required className="w-full border p-2" />
        <input type="text" name="unidadMedida" value={meta.unidadMedida} onChange={handleChange} placeholder="Unidad de Medida" className="w-full border p-2" />
        <input type="text" name="valorInicial" value={meta.valorInicial} onChange={handleChange} placeholder="Valor Inicial" className="w-full border p-2" />
        <input type="text" name="valorObjetivo" value={meta.valorObjetivo} onChange={handleChange} placeholder="Valor Objetivo" className="w-full border p-2" />
        
        <select name="idPlan" value={meta.plan?.idPlan || ""} onChange={handleChange} required className="w-full border p-2">
          <option value="">Seleccione un plan</option>
          {planes.map(p => (
            <option key={p.idPlan} value={p.idPlan}>{p.nombrePlan}</option>
          ))}
        </select>

        <select name="idProyecto" value={meta.proyecto?.idProyecto || ""} onChange={handleChange} required className="w-full border p-2">
          <option value="">Seleccione un proyecto</option>
          {proyectos.map(proy => (
            <option key={proy.idProyecto} value={proy.idProyecto}>{proy.nombreProyecto}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormMeta;
