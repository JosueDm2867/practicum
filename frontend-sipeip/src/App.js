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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entidades" element={<ListaEntidades />} />
          <Route path="/entidades/nuevo" element={<FormEntidad />} />
          <Route path="/entidades/editar/:id" element={<FormEntidad />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/usuarios/nuevo" element={<FormUsuario />} />
          <Route path="/usuarios/editar/:id" element={<FormUsuario />} />
          <Route path="/roles" element={<ListaRoles />} />
          <Route path="/roles/nuevo" element={<FormRol />} />
          <Route path="/roles/editar/:id" element={<FormRol />} />
          <Route path="/unidades" element={<ListaUnidades />} />
          <Route path="/unidades/nueva" element={<FormUnidad />} />
          <Route path="/unidades/editar/:id" element={<FormUnidad />} />
          <Route path="/objetivos/pnd/nuevo" element={<FormObjetivoPND />} />
          <Route path="/objetivos/pnd/editar/:id" element={<FormObjetivoPND />} />
          <Route path="/objetivos/ods/nuevo" element={<FormObjetivoODS />} />
          <Route path="/objetivos/ods/editar/:id" element={<FormObjetivoODS />} />
          <Route path="/objetivos/estrategicos/nuevo" element={<FormObjetivoEstrategico />} />
          <Route path="/objetivos/estrategicos/editar/:id" element={<FormObjetivoEstrategico />} />
          <Route path="/planes" element={<ListaPlanes />} />
          <Route path="/planes/nuevo" element={<FormPlan />} />
          <Route path="/planes/editar/:id" element={<FormPlan />} />
          <Route path="/programas" element={<ListaProgramas />} />
          <Route path="/programas/nuevo" element={<FormPrograma />} />
          <Route path="/programas/editar/:id" element={<FormPrograma />} />
          <Route path="/metas" element={<ListaMetas />} />
          <Route path="/metas/nueva" element={<FormMeta />} />
          <Route path="/metas/editar/:id" element={<FormMeta />} />
          <Route path="/presupuesto" element={<ListaPresupuesto />} />
          <Route path="/presupuesto/nuevo" element={<FormPresupuesto />} />
          <Route path="/presupuesto/editar/:id" element={<FormPresupuesto />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/nuevo" element={<FormProyecto />} />
          <Route path="/proyectos/editar/:id" element={<FormProyecto />} />
          <Route path="/objetivos" element={<VistaObjetivos />} />
          <Route path="/actividades" element={<ListaActividadOperativa />} />
          <Route path="/actividades/nueva" element={<FormActividadOperativa />} />
          <Route path="/actividades/editar/:id" element={<FormActividadOperativa />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
