import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { setUsuario } = useContext(AuthContext);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        correo,
        password,
      });
      localStorage.setItem("token", res.data.token);

      const tokenPayload = JSON.parse(atob(res.data.token.split('.')[1]));
      setUsuario({ correo: tokenPayload.sub, rol: tokenPayload.rol });
      navigate("/");
    } catch (err) {
      setErrorMsg("Credenciales incorrectas o usuario inactivo.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          className="w-full border p-2"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Iniciar Sesión
        </button>
        {errorMsg && <div className="text-red-600 text-sm">{errorMsg}</div>}
      </form>
    </div>
  );
};

export default Login;
