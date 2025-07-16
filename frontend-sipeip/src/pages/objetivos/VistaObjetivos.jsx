import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VistaObjetivos = () => {
  const [estrategicos, setEstrategicos] = useState([]);
  const [pnds, setPnds] = useState([]);
  const [ods, setOds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/objetivos-estrategicos")
      .then(res => setEstrategicos(res.data))
      .catch(err => console.error("Error al cargar objetivos estratégicos", err));

    axios.get("http://localhost:8080/api/objetivos-pnd")
      .then(res => setPnds(res.data))
      .catch(err => console.error("Error al cargar objetivos PND", err));

    axios.get("http://localhost:8080/api/objetivos-ods")
      .then(res => setOds(res.data))
      .catch(err => console.error("Error al cargar objetivos ODS", err));
  }, []);

  const renderTable = (headers, rows) => (
    <table className="table-auto w-full border text-sm shadow-sm bg-white">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((h, idx) => (
            <th key={idx} className="border px-4 py-2 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

  return (
    <div className="p-6 space-y-16">
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Objetivos Estratégicos</h2>
        <Link to="/objetivos/estrategicos/nuevo" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 inline-block">
          Crear Objetivo Estratégico
        </Link>
        {renderTable(
          ["Nombre", "Descripción", "Basado en"],
          estrategicos.map(obj => (
            <tr key={obj.idObjetivo} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{obj.nombre}</td>
              <td className="border px-4 py-2">{obj.descripcion}</td>
              <td className="border px-4 py-2">
                {obj.objetivoPnd
                  ? `PND: ${obj.objetivoPnd.nombre}`
                  : obj.objetivoOds
                  ? `ODS: ${obj.objetivoOds.nombre}`
                  : "—"}
              </td>
            </tr>
          ))
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Objetivos del Plan Nacional de Desarrollo (PND)</h2>
        <Link to="/objetivos/pnd/nuevo" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4 inline-block">
          Crear Objetivo PND
        </Link>
        {renderTable(
          ["Código", "Nombre", "Descripción", "Año"],
          pnds.map(pnd => (
            <tr key={pnd.idPnd} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{pnd.codigo}</td>
              <td className="border px-4 py-2">{pnd.nombre}</td>
              <td className="border px-4 py-2">{pnd.descripcion}</td>
              <td className="border px-4 py-2">{pnd.anio}</td>
            </tr>
          ))
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Objetivos de Desarrollo Sostenible (ODS)</h2>
        <Link to="/objetivos/ods/nuevo" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mb-4 inline-block">
          Crear Objetivo ODS
        </Link>
        {renderTable(
          ["Código", "Nombre", "Descripción", "Año"],
          ods.map(o => (
            <tr key={o.idOds} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{o.codigo}</td>
              <td className="border px-4 py-2">{o.nombre}</td>
              <td className="border px-4 py-2">{o.descripcion}</td>
              <td className="border px-4 py-2">{o.anio}</td>
            </tr>
          ))
        )}
      </section>

    </div>
  );
};

export default VistaObjetivos;
