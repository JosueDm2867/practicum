// src/pages/planes/FormPlan.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormPlan = () => {
  const [plan, setPlan] = useState({
    nombrePlan: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    estado: 1,
    entidad: { idEntidad: "" },
    responsable: { id: "" },
    usuarios: [],
  });

  const [entidades, setEntidades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // Obtener entidades y usuarios
  useEffect(() => {
    axios.get("http://localhost:8080/api/entidades")
      .then(res => setEntidades(res.data))
      .catch(err => console.error("Error al cargar entidades", err));

    axios.get("http://localhost:8080/api/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Error al cargar usuarios", err));

    if (id) {
      axios.get(`http://localhost:8080/api/planes/${id}`)
        .then(res => {
          const data = res.data;
          setPlan({
            ...data,
            entidad: data.entidad || { idEntidad: "" },
            responsable: data.responsable || { id: "" },
            usuarios: data.usuarios?.map(u => u.id) || [],
          });
        })
        .catch(err => console.error("Error al cargar plan", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };

  const handleSelectEntidad = (e) => {
    setPlan({ ...plan, entidad: { idEntidad: parseInt(e.target.value) } });
  };

  const handleSelectResponsable = (e) => {
    setPlan({ ...plan, responsable: { id: parseInt(e.target.value) } });
  };

  const handleSelectUsuarios = (e) => {
    const options = Array.from(e.target.selectedOptions, option => parseInt(option.value));
    setPlan({ ...plan, usuarios: options });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const planToSend = {
      ...plan,
      usuarios: plan.usuarios.map(id => ({ id })),
    };
    const url = id ? `http://localhost:8080/api/planes/${id}` : "http://localhost:8080/api/planes";
    const method = id ? axios.put : axios.post;

    try {
      await method(url, planToSend);
      navigate("/planes");
    } catch (err) {
      console.error("Error al guardar plan", err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Plan" : "Nuevo Plan Institucional"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombrePlan"
          placeholder="Nombre del Plan"
          value={plan.nombrePlan}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={plan.descripcion}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="fechaInicio"
            value={plan.fechaInicio}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          <input
            type="date"
            name="fechaFin"
            value={plan.fechaFin}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <select
          name="estado"
          value={plan.estado}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>

        <select
          name="entidad"
          value={plan.entidad.idEntidad || ""}
          onChange={handleSelectEntidad}
          className="w-full border p-2"
          required
        >
          <option value="">Seleccione una entidad</option>
          {entidades.map(ent => (
            <option key={ent.idEntidad} value={ent.idEntidad}>{ent.nombre}</option>
          ))}
        </select>

        <select
          name="responsable"
          value={plan.responsable.id || ""}
          onChange={handleSelectResponsable}
          className="w-full border p-2"
          required
        >
          <option value="">Seleccione responsable</option>
          {usuarios.map(u => (
            <option key={u.id} value={u.id}>{u.nombre} {u.apellido}</option>
          ))}
        </select>

        <label className="block font-medium">Usuarios asociados:</label>
        <select
          multiple
          value={plan.usuarios}
          onChange={handleSelectUsuarios}
          className="w-full border p-2 h-32"
        >
          {usuarios.map(u => (
            <option key={u.id} value={u.id}>
              {u.nombre} {u.apellido}
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

export default FormPlan;
