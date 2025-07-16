import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormActividadOperativa = () => {
  const [actividad, setActividad] = useState({
    descripcion: "",
    fecha: "",
    meta: { idMeta: "" },
    usuario: { id: "" },
    unidad: { idUnidadOrganizacional: "" },
    presupuesto: { idPresupuesto: "" }
  });

  const [metas, setMetas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [presupuestos, setPresupuestos] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/metas").then(res => setMetas(res.data));
    axios.get("http://localhost:8080/api/usuarios").then(res => setUsuarios(res.data));
    axios.get("http://localhost:8080/api/unidades").then(res => setUnidades(res.data));
    axios.get("http://localhost:8080/api/presupuestos").then(res => setPresupuestos(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/actividades-operativas/${id}`)
        .then(res => setActividad(res.data));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (["meta", "usuario", "unidad", "presupuesto"].includes(name)) {
      const key = name === "unidad" ? "idUnidadOrganizacional" :
                  name === "usuario" ? "id" :
                  name === "presupuesto" ? "idPresupuesto" : "idMeta";
      setActividad({ ...actividad, [name]: { [key]: parseInt(value) } });
    } else {
      setActividad({ ...actividad, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = id ? axios.put : axios.post;
    const url = id
      ? `http://localhost:8080/api/actividades-operativas/${id}`
      : "http://localhost:8080/api/actividades-operativas";

    try {
      await method(url, actividad);
      navigate("/actividades");
    } catch (err) {
      console.error("Error al guardar actividad:", err);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar" : "Nueva"} Actividad Operativa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="descripcion"
          value={actividad.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full border p-2"
          required
        />
        <input
          type="date"
          name="fecha"
          value={actividad.fecha}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        <select name="meta" value={actividad.meta?.idMeta || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Meta</option>
          {metas.map(meta => (
            <option key={meta.idMeta} value={meta.idMeta}>{meta.descripcion}</option>
          ))}
        </select>

        <select name="usuario" value={actividad.usuario?.id || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Usuario</option>
          {usuarios.map(user => (
            <option key={user.id} value={user.id}>{user.nombre}</option>
          ))}
        </select>

        <select name="unidad" value={actividad.unidad?.idUnidadOrganizacional || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Unidad</option>
          {unidades.map(uni => (
            <option key={uni.idUnidadOrganizacional} value={uni.idUnidadOrganizacional}>{uni.nombre}</option>
          ))}
        </select>

        <select name="presupuesto" value={actividad.presupuesto?.idPresupuesto || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccionar Presupuesto</option>
          {presupuestos.map(pres => (
            <option key={pres.idPresupuesto} value={pres.idPresupuesto}>{pres.monto}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormActividadOperativa;
