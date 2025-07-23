import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RolProtegido = ({ rolRequerido, children }) => {
  const { usuario } = useAuth();

  if (!usuario) return <Navigate to="/login" />;

  if (rolRequerido) {
    const rolesPermitidos = Array.isArray(rolRequerido) ? rolRequerido : [rolRequerido];
    const esPermitido = rolesPermitidos.some(
      r => usuario.rol?.toUpperCase() === r.toUpperCase()
    );
    if (!esPermitido) {
      setTimeout(() => window.alert("No tienes permisos para acceder a esta sección."), 100);
      return <Navigate to="/" replace />;
    }
  }
  return children;
};

export default RolProtegido;
