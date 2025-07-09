// src/pages/proyectos/FormProyecto.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: "",
    codigo: "",
    monto: "",
    estado: "ACTIVO",
    fechaInicio: "",
    fechaFin: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/proyectos/${id}`)
        .then((res) => setProyecto(res.data))
        .catch((err) => console.error("Error al cargar proyecto", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProyecto({ ...proyecto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:8080/api/proyectos/${id}`
      : "http://localhost:8080/api/proyectos";
    const method = id ? axios.put : axios.post;

    try {
      await method(url, proyecto);
      navigate("/proyectos");
    } catch (err) {
      console.error("Error al guardar proyecto", err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Editar Proyecto" : "Nuevo Proyecto de Inversión"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          value={proyecto.nombre}
          onChange={handleChange}
          placeholder="Nombre del proyecto"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="codigo"
          value={proyecto.codigo}
          onChange={handleChange}
          placeholder="Código"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="monto"
          value={proyecto.monto}
          onChange={handleChange}
          placeholder="Monto"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="fechaInicio"
          value={proyecto.fechaInicio}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="fechaFin"
          value={proyecto.fechaFin}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="estado"
          value={proyecto.estado}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="ACTIVO">ACTIVO</option>
          <option value="INACTIVO">INACTIVO</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormProyecto;
