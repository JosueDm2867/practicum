import React from 'react';
import axios from 'axios';

const ReporteUsuarios = () => {
  const descargarPDF = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/reportes/usuarios/pdf', {
        responseType: 'blob', 
      });

      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'usuarios.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error al descargar el PDF', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Reporte de Usuarios</h2>
      <buttoncls
        onClick={descargarPDF}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Descargar PDF
      </buttoncls>
    </div>
  );
};

export default ReporteUsuarios;