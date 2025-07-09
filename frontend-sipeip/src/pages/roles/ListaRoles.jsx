import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormRol = () => {
  const [rol, setRol] = useState({
    nombre: "",
    descripcion: "",
    estado: "ACTIVO",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/roles/${id}`)
        .then((res) => setRol(res.data))
        .catch((err) => console.error("Error al obtener rol", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRol({ ...rol, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/roles/${id}`, rol);
      } else {
        await axios.post("http://localhost:8080/api/roles", rol);
      }
      navigate("/roles");
    } catch (err) {
      console.error("Error al guardar rol", err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Rol" : "Nuevo Rol"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          value={rol.nombre}
          onChange={handleChange}
          placeholder="Nombre del rol"
          required
          className="w-full border p-2"
        />

        <textarea
          name="descripcion"
          value={rol.descripcion}
          onChange={handleChange}
          placeholder="Descripción del rol"
          className="w-full border p-2"
        />

        <select
          name="estado"
          value={rol.estado}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="ACTIVO">ACTIVO</option>
          <option value="INACTIVO">INACTIVO</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormRol;
