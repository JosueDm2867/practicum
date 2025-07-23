import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    password: "",
    estado: "",
    rol: { idRol: "" }
  });

  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/roles")
      .then(res => setRoles(res.data))
      .catch(err => console.error("Error al cargar roles", err));

    if (id) {
      axios.get(`http://localhost:8080/api/usuarios/${id}`)
        .then(res => setUsuario({ ...res.data, password: "", rol: res.data.rol || { idRol: "" } }))
        .catch(err => console.error("Error al cargar usuario", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "idRol") {
      setUsuario({ ...usuario, rol: { idRol: parseInt(value) } });
    } else {
      setUsuario({ ...usuario, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = "http://localhost:8080/api/usuarios";

    const dataToSend = { ...usuario };
    if (!id) delete dataToSend.id;

    const request = id ? axios.put(`${endpoint}/${id}`, dataToSend) : axios.post(endpoint, dataToSend);

    request
      .then(() => navigate("/usuarios"))
      .catch(err => console.error("Error al guardar usuario", err));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Usuario" : "Nuevo Usuario"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nombre" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} required className="w-full border p-2" />
        <input type="text" name="apellido" placeholder="Apellido" value={usuario.apellido} onChange={handleChange} required className="w-full border p-2" />
        <input type="text" name="cedula" placeholder="Cédula" value={usuario.cedula} onChange={handleChange} required className="w-full border p-2" />
        <input type="email" name="correo" placeholder="Correo" value={usuario.correo} onChange={handleChange} required className="w-full border p-2" />
        {!id && (
          <input type="password" name="password" placeholder="Contraseña" value={usuario.password} onChange={handleChange} required className="w-full border p-2" />
        )}
        <select name="estado" value={usuario.estado} onChange={handleChange} required className="w-full border p-2">
          <option value="">Seleccione estado</option>
          <option value="ACTIVO">ACTIVO</option>
          <option value="INACTIVO">INACTIVO</option>
        </select>

        <select name="idRol" value={usuario.rol?.idRol || ""} onChange={handleChange} required className="w-full border p-2">
          <option value="">Seleccione un Rol</option>
          {roles.map((rol) => (
            <option key={rol.idRol} value={rol.idRol}>
              {rol.nombre}
            </option>
          ))}
        </select>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormUsuario;