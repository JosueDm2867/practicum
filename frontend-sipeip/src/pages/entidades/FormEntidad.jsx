import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function FormEntidad() {
  const [entidad, setEntidad] = useState({
    codigo: "",
    subsector: "",
    nivelGobierno: "",
    estado: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/entidades/${id}`)
        .then(res => setEntidad(res.data))
        .catch(err => console.error("Error al obtener entidad", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setEntidad({ ...entidad, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/entidades", entidad)
      .then(() => navigate("/entidades"))
      .catch(err => console.error("Error al guardar entidad", err));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar" : "Crear"} Entidad</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="codigo"
          placeholder="Código"
          value={entidad.codigo}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
         <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={entidad.nombre}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="subsector"
          placeholder="Subsector"
          value={entidad.subsector}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="nivelGobierno"
          placeholder="Nivel de Gobierno"
          value={entidad.nivelGobierno}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={entidad.estado}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}
