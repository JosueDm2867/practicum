import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormPrograma = () => {
  const [programa, setPrograma] = useState({
    nombrePrograma: "",
    descripcion: "",
    estadoPrograma: 1,
    fechaInicio: "",
    fechaFin: "",
    entidad: { idEntidad: "" },
    proyecto: { idProyecto: "" }
  });

  const [entidades, setEntidades] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/entidades").then(res => setEntidades(res.data));
    axios.get("http://localhost:8080/api/proyectos").then(res => setProyectos(res.data));

    if (id) {
      axios.get(`http://localhost:8080/api/programas/${id}`)
        .then(res => setPrograma(res.data))
        .catch(err => console.error("Error al cargar programa", err));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "idEntidad") {
      setPrograma({ ...programa, entidad: { idEntidad: parseInt(value) } });
    } else if (name === "idProyecto") {
      setPrograma({ ...programa, proyecto: { idProyecto: parseInt(value) } });
    } else {
      setPrograma({ ...programa, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = id ? `http://localhost:8080/api/programas/${id}` : "http://localhost:8080/api/programas";
    const method = id ? axios.put : axios.post;

    try {
      await method(url, programa);
      navigate("/programas");
    } catch (err) {
      console.error("Error al guardar programa", err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar" : "Nuevo"} Programa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nombrePrograma" placeholder="Nombre" value={programa.nombrePrograma} onChange={handleChange} className="w-full border p-2" />
        <textarea name="descripcion" placeholder="Descripción" value={programa.descripcion} onChange={handleChange} className="w-full border p-2" />
        <input type="date" name="fechaInicio" value={programa.fechaInicio} onChange={handleChange} className="w-full border p-2" />
        <input type="date" name="fechaFin" value={programa.fechaFin} onChange={handleChange} className="w-full border p-2" />
        <select name="estadoPrograma" value={programa.estadoPrograma} onChange={handleChange} className="w-full border p-2">
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>

        <select name="idEntidad" value={programa.entidad?.idEntidad || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccione una entidad</option>
          {entidades.map(e => <option key={e.idEntidad} value={e.idEntidad}>{e.nombre}</option>)}
        </select>

        <select name="idProyecto" value={programa.proyecto?.idProyecto || ""} onChange={handleChange} className="w-full border p-2">
          <option value="">Seleccione un proyecto</option>
          {proyectos.map(p => <option key={p.idProyecto} value={p.idProyecto}>{p.nombreProyecto}</option>)}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{id ? "Actualizar" : "Guardar"}</button>
      </form>
    </div>
  );
};

export default FormPrograma;