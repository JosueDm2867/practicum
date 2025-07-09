import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormUnidad = () => {
  const [unidad, setUnidad] = useState({
    nombre: "",
    responsable: "",
    telefonoInterno: "",
    correo: "",
    estado: "",
    entidad: { idEntidad: "" },
  });

  const [entidades, setEntidades] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/entidades")
      .then((res) => setEntidades(res.data))
      .catch((err) => console.error("Error al cargar entidades", err));
      if (id) {
      axios
        .get(`http://localhost:8080/api/unidades/${id}`)
        .then((res) => setUnidad(res.data))
        .catch((err) => console.error("Error al cargar unidad", err));
    }
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "idEntidad") {
      setUnidad({ ...unidad, entidad: { idEntidad: parseInt(value) } });
    } else {
      setUnidad({ ...unidad, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = "http://localhost:8080/api/unidades";

    const dataToSend = { ...unidad };
    if (!id) delete dataToSend.id;

    const request = id ? axios.put(`${endpoint}/${id}`, dataToSend) : axios.post(endpoint, dataToSend);

    request
      .then(() => navigate("/usuarios"))
      .catch(err => console.error("Error al guardar usuario", err));
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-xl font-bold mb-4">
        {id ? "Editar Unidad" : "Nueva Unidad Organizacional"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={unidad.nombre}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />

        <input
          type="text"
          name="responsable"
          placeholder="Responsable"
          value={unidad.responsable}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          type="text"
          name="telefonoInterno"
          placeholder="Teléfono o extensión interna"
          value={unidad.telefonoInterno}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo institucional"
          value={unidad.correo}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <select
          name="idEntidad"
          value={unidad.entidad?.idEntidad || ""}
          onChange={handleChange}
          required
          className="w-full border p-2"
        >
          <option value="">Seleccione una entidad</option>
          {entidades.map((entidad) => (
            <option key={entidad.idEntidad} value={entidad.idEntidad}>
              {entidad.nombre}
            </option>
          ))}
        </select>
        <select
          name="estado"
          value={unidad.estado}
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

export default FormUnidad;
