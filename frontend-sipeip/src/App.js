import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.js";
import Home from "./pages/dashboard/Home.jsx";
import ListaEntidades from "./pages/entidades/ListaEntidades.jsx";
import FormEntidad from "./pages/entidades/FormEntidad.jsx";
import ListaUsuarios from "./pages/usuarios/ListaUsuarios.jsx";
import FormUsuario from "./pages/usuarios/FormUsuario.jsx";
import FormRol from "./pages/roles/FormRol.jsx";
import ListaRoles from "./pages/roles/ListaRoles.jsx";
import ListaUnidades from "./pages/UnidadOrganizacional/ListaUnidades.jsx";
import FormUnidad from "./pages/UnidadOrganizacional/FormUnidad.jsx";
import FormObjetivoPND from "./pages/objetivos/FormObjetivoPND.jsx";
import FormObjetivoODS from "./pages/objetivos/FormObjetivoODS.jsx";
import ListaPlanes from "./pages/planInstitucional/ListaPlanes.jsx";
import FormPlan from "./pages/planInstitucional/FormPlan.jsx";
import ListaProgramas from "./pages/programa/ListaProgramas.jsx";
import FormPrograma from "./pages/programa/FormPrograma.jsx";
import ListaMetas from "./pages/metas/ListaMetas.jsx";
import FormMeta from "./pages/metas/FormMeta.jsx";
import ListaPresupuesto from "./pages/presupuesto/ListaPresupuesto.jsx";
import FormPresupuesto from "./pages/presupuesto/FormPresupuesto.jsx";
import ListaProyectos from "./pages/proyectos/ListaProyectos.jsx";
import FormProyecto from "./pages/proyectos/FormProyecto.jsx";
import VistaObjetivos from "./pages/objetivos/VistaObjetivos.jsx";
import ListaActividadOperativa from "./pages/actividadOperativa/ListaActividadOperativa.jsx";
import FormActividadOperativa from "./pages/actividadOperativa/FormActividadOperativa.jsx";
import FormObjetivoEstrategico from "./pages/objetivos/FormObjetivoEstrategico.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import RolProtegido from "./components/RolProtegido.jsx";
import ReporteProyectos from "./pages/reportes/ReporteProyectos.jsx";
import ReporteUsuarios from "./pages/reportes/ReporteUsuarios.jsx";
import Login from "./components/Login.jsx";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={
              <RolProtegido rolRequerido={["Admin"]}><ListaUsuarios /></RolProtegido>
            } />
            <Route path="/usuarios/nuevo" element={
              <RolProtegido rolRequerido={["Admin"]}><FormUsuario /></RolProtegido>
            } />
            <Route path="/usuarios/editar/:id" element={
              <RolProtegido rolRequerido={["Admin"]}><FormUsuario /></RolProtegido>
            } />
            <Route path="/roles" element={
              <RolProtegido rolRequerido={["Admin"]}><ListaRoles /></RolProtegido>
            } />
            <Route path="/roles/nuevo" element={
              <RolProtegido rolRequerido={["Admin"]}><FormRol /></RolProtegido>
            } />
            <Route path="/roles/editar/:id" element={
              <RolProtegido rolRequerido={["Admin"]}><FormRol /></RolProtegido>
            } />

            <Route path="/entidades" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><ListaEntidades /></RolProtegido>
            } />
            <Route path="/entidades/nuevo" element={
              <RolProtegido rolRequerido={["Admin"]}><FormEntidad /></RolProtegido>
            } />
            <Route path="/entidades/editar/:id" element={
              <RolProtegido rolRequerido={["Admin"]}><FormEntidad /></RolProtegido>
            } />

            <Route path="/unidades" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><ListaUnidades /></RolProtegido>
            } />
            <Route path="/unidades/nueva" element={
              <RolProtegido rolRequerido={["Admin"]}><FormUnidad /></RolProtegido>
            } />
            <Route path="/unidades/editar/:id" element={
              <RolProtegido rolRequerido={["Admin"]}><FormUnidad /></RolProtegido>
            } />

            <Route path="/planes" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo", "Revisor Institucional", "Autoridad Validante"]}><ListaPlanes /></RolProtegido>
            } />
            <Route path="/planes/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormPlan /></RolProtegido>
            } />
            <Route path="/planes/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormPlan /></RolProtegido>
            } />

            <Route path="/programas" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><ListaProgramas /></RolProtegido>
            } />
            <Route path="/programas/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormPrograma /></RolProtegido>
            } />
            <Route path="/programas/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormPrograma /></RolProtegido>
            } />

            <Route path="/metas" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><ListaMetas /></RolProtegido>
            } />
            <Route path="/metas/nueva" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormMeta /></RolProtegido>
            } />
            <Route path="/metas/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormMeta /></RolProtegido>
            } />

            <Route path="/presupuesto" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Auditor", "Usuario Externo"]}><ListaPresupuesto /></RolProtegido>
            } />
            <Route path="/presupuesto/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormPresupuesto /></RolProtegido>
            } />
            <Route path="/presupuesto/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormPresupuesto /></RolProtegido>
            } />

            <Route path="/proyectos" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><ListaProyectos /></RolProtegido>
            } />
            <Route path="/proyectos/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormProyecto /></RolProtegido>
            } />
            <Route path="/proyectos/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormProyecto /></RolProtegido>
            } />

            <Route path="/objetivos" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><VistaObjetivos /></RolProtegido>
            } />
            <Route path="/objetivos/pnd/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoPND /></RolProtegido>
            } />
            <Route path="/objetivos/pnd/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoPND /></RolProtegido>
            } />
            <Route path="/objetivos/ods/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoODS /></RolProtegido>
            } />
            <Route path="/objetivos/ods/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoODS /></RolProtegido>
            } />
            <Route path="/objetivos/estrategicos/nuevo" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoEstrategico /></RolProtegido>
            } />
            <Route path="/objetivos/estrategicos/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion"]}><FormObjetivoEstrategico /></RolProtegido>
            } />

            <Route path="/actividades" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><ListaActividadOperativa /></RolProtegido>
            } />
            <Route path="/actividades/nueva" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormActividadOperativa /></RolProtegido>
            } />
            <Route path="/actividades/editar/:id" element={
              <RolProtegido rolRequerido={["Admin", "Tecnico de Planificacion", "Usuario Externo"]}><FormActividadOperativa /></RolProtegido>
            } />
            <Route path="/reporte-proyectos" element={<ReporteProyectos />} />
            <Route path="/reporte-usuarios" element={<ReporteUsuarios />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
