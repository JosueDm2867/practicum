import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormActividadOperativa = () => {
  const [actividad, setActividad] = useState({
    descripcion: "",
    fecha: "",
    meta: { idMeta: "" },
    unidad: { idUnidadOrganizacional: "" },
    usuario: { id: "" },
    presupuesto: { idPresupuesto: "" },
  });

  const [metas, setMetas] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [presupuestos, setPresupuestos] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/metas").then(res => setMetas(res.data));
    axios.get("http://localhost:8080/api/unidades").then(res => setUnidades(res.data));
    axios.get("http://localhost:8080/api/usuarios").then(res => setUsuarios(res.data));
    axios.get("http://localhost:8080/api/presupuestos").then(res => setPresupuestos(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/actividades/${id}`)
        .then(res => setActividad(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["meta", "unidad", "usuario", "presupuesto"].includes(name)) {
      setActividad({ ...actividad, [name]: { [`id${name.charAt(0).toUpperCase() + name.slice(1)}`]: value } });
    } else {
      setActividad({ ...actividad, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? axios.put : axios.post;
    const url = id
      ? `http://localhost:8080/api/actividades/${id}`
      : "http://localhost:8080/api/actividades";

    try {
      await method(url, actividad);
      navigate("/actividades");
    } catch (err) {
      console.error("Error al guardar actividad", err);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar" : "Nueva"} Actividad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="descripcion" placeholder="Descripción" value={actividad.descripcion} onChange={handleChange} className="w-full border p-2" required />
        <input type="date" name="fecha" value={actividad.fecha} onChange={handleChange} className="w-full border p-2" required />
        <select name="meta" value={actividad.meta.idMeta || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Meta</option>
          {metas.map((m) => <option key={m.idMeta} value={m.idMeta}>{m.descripcion}</option>)}
        </select>
        <select name="unidad" value={actividad.unidad.idUnidadOrganizacional || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Unidad</option>
          {unidades.map((u) => <option key={u.idUnidadOrganizacional} value={u.idUnidadOrganizacional}>{u.nombre}</option>)}
        </select>
        <select name="usuario" value={actividad.usuario.id || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Usuario</option>
          {usuarios.map((u) => <option key={u.id} value={u.id}>{u.nombre}</option>)}
        </select>
        <select name="presupuesto" value={actividad.presupuesto.idPresupuesto || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Selecciona Presupuesto</option>
          {presupuestos.map((p) => <option key={p.idPresupuesto} value={p.idPresupuesto}>{p.monto} USD</option>)}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormActividadOperativa;
