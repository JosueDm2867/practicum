import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormPlanInstitucional = () => {
  const [plan, setPlan] = useState({
    nombrePlan: "",
    descripcion: "",
    estado: 1,
    fechaInicio: "",
    fechaFin: "",
    entidad: { idEntidad: "" },
    responsable: { id: "" },
  });

  const [entidades, setEntidades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/entidades").then(res => setEntidades(res.data));
    axios.get("http://localhost:8080/api/usuarios").then(res => setUsuarios(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/planes/${id}`)
        .then(res => setPlan(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "entidad") {
      setPlan({ ...plan, entidad: { idEntidad: parseInt(value) } });
    } else if (name === "responsable") {
      setPlan({ ...plan, responsable: { id: parseInt(value) } });
    } else {
      setPlan({ ...plan, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = id ? `http://localhost:8080/api/planes/${id}` : "http://localhost:8080/api/planes";
    const method = id ? axios.put : axios.post;

    await method(url, plan);
    navigate("/planes");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar" : "Nuevo"} Plan Institucional</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nombrePlan" placeholder="Nombre del Plan" value={plan.nombrePlan} onChange={handleChange} className="w-full border p-2" required />
        <textarea name="descripcion" placeholder="Descripción" value={plan.descripcion} onChange={handleChange} className="w-full border p-2" />

        <input type="date" name="fechaInicio" value={plan.fechaInicio} onChange={handleChange} className="w-full border p-2" />
        <input type="date" name="fechaFin" value={plan.fechaFin} onChange={handleChange} className="w-full border p-2" />

        <select name="estado" value={plan.estado} onChange={handleChange} className="w-full border p-2">
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>

        <select name="entidad" value={plan.entidad?.idEntidad || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Entidad</option>
          {entidades.map(e => (
            <option key={e.idEntidad} value={e.idEntidad}>{e.nombre}</option>
          ))}
        </select>

        <select name="responsable" value={plan.responsable?.id || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Responsable</option>
          {usuarios.map(u => (
            <option key={u.id} value={u.id}>{u.nombre} {u.apellido}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormPlanInstitucional;
