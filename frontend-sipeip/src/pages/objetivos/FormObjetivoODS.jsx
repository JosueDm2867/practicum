import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormObjetivoODS = () => {
  const [objetivo, setObjetivo] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    anio: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setObjetivo({ ...objetivo, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = id ? axios.put : axios.post;
    const url = id
      ? `http://localhost:8080/api/objetivos-ods/${id}`
      : "http://localhost:8080/api/objetivos-ods";

    await method(url, objetivo);
    navigate("/objetivos");
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar" : "Nuevo"} Objetivo ODS
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="codigo"
          value={objetivo.codigo}
          onChange={handleChange}
          placeholder="Código"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="nombre"
          value={objetivo.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="descripcion"
          value={objetivo.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="anio"
          value={objetivo.anio}
          onChange={handleChange}
          placeholder="Año"
          type="number"
          className="w-full border p-2 rounded"
          required
        />

        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormObjetivoODS;
