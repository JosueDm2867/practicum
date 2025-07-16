import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormObjetivoEstrategico = () => {
  const [objetivo, setObjetivo] = useState({
    nombre: "",
    descripcion: "",
    objetivoPnd: "",
    objetivoOds: ""
  });

  const [pnds, setPnds] = useState([]);
  const [ods, setOds] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/objetivos-pnd").then(res => setPnds(res.data));
    axios.get("http://localhost:8080/api/objetivos-ods").then(res => setOds(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/objetivos-estrategicos/${id}`).then(res => {
        setObjetivo({
          nombre: res.data.nombre,
          descripcion: res.data.descripcion,
          objetivoPnd: res.data.objetivoPnd?.idPnd || "",
          objetivoOds: res.data.objetivoOds?.idOds || ""
        });
      });
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setObjetivo({ ...objetivo, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      nombre: objetivo.nombre,
      descripcion: objetivo.descripcion,
      objetivoPnd: objetivo.objetivoPnd ? { idPnd: objetivo.objetivoPnd } : null,
      objetivoOds: objetivo.objetivoOds ? { idOds: objetivo.objetivoOds } : null
    };

    const method = id ? axios.put : axios.post;
    const url = id
      ? `http://localhost:8080/api/objetivos-estrategicos/${id}`
      : "http://localhost:8080/api/objetivos-estrategicos";

    await method(url, payload);
    navigate("/objetivos");
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar" : "Nuevo"} Objetivo Estratégico
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <select
          name="objetivoPnd"
          value={objetivo.objetivoPnd}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Basado en PND (opcional)</option>
          {pnds.map(p => (
            <option key={p.idPnd} value={p.idPnd}>{p.nombre}</option>
          ))}
        </select>

        <select
          name="objetivoOds"
          value={objetivo.objetivoOds}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Basado en ODS (opcional)</option>
          {ods.map(o => (
            <option key={o.idOds} value={o.idOds}>{o.nombre}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default FormObjetivoEstrategico;
