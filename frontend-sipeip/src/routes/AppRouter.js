import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/dashboard/Home";
import ListaEntidades from "../pages/entidades/ListaEntidades";
import FormEntidad from "../pages/entidades/FormEntidad";
import ListaUsuarios from "../pages/usuarios/ListaUsuarios";
import FormUsuario from "../pages/usuarios/FormUsuario";
import FormRol from "../pages/roles/FormRol";
import ListaRoles from "../pages/roles/ListaRoles"
import ListaUnidades from "../pages/UnidadOrganizacional/ListaUnidades";
import FormUnidad from "../pages/UnidadOrganizacional/FormUnidad";
import ListaProyectos from "../pages/proyectos/ListaProyectos";
import FormProyecto from "../pages/proyectos/FormProyecto";
import ListaPlanes from "../pages/planInstitucional/ListaPlanes";
import FormPlan from "../pages/planInstitucional/FormPlan";
import ListaMetas from "../pages/metas/ListaMetas";
import FormMeta from "../pages/metas/FormMeta";
import ListaProgramas from "../pages/programas/ListaProgramas";
import FormPrograma from "../pages/programas/FormPrograma";
import ListaActividades from "../pages/actividades/ListaActividades";
import FormActividad from "../pages/actividades/FormActividad";
import ListaPresupuestos from "../pages/presupuestos/ListaPresupuestos";
import FormPresupuesto from "../pages/presupuestos/FormPresupuesto";
import ListaObjetivosPND from "../pages/objetivos/ListaObjetivosPND";
import FormObjetivoPND from "../pages/objetivos/FormObjetivoPND";
import ListaODS from "../pages/objetivos/ListaODS";
import FormODS from "../pages/objetivos/FormODS";
import ListaObjetivosEstrategicos from "../pages/objetivos/ListaObjetivosEstrategicos";
import FormObjetivoEstrategico from "../pages/objetivos/FormObjetivoEstrategico";

const AppRouter = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entidades" element={<ListaEntidades />} />
          <Route path="/entidades/nueva" element={<FormEntidad />} />
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
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/nuevo" element={<FormProyecto />} />
          <Route path="/proyectos/editar/:id" element={<FormProyecto />} />
          <Route path="/planes" element={<ListaPlanes />} />
          <Route path="/planes/nuevo" element={<FormPlan />} />
          <Route path="/planes/editar/:id" element={<FormPlan />} />
          <Route path="/metas" element={<ListaMetas />} />
          <Route path="/metas/nueva" element={<FormMeta />} />
          <Route path="/metas/editar/:id" element={<FormMeta />} />
          <Route path="/programas" element={<ListaProgramas />} />
          <Route path="/programas/nuevo" element={<FormPrograma />} />
          <Route path="/programas/editar/:id" element={<FormPrograma />} />
          <Route path="/actividades" element={<ListaActividades />} />
          <Route path="/actividades/nuevo" element={<FormActividad />} />
          <Route path="/actividades/editar/:id" element={<FormActividad />} />
          <Route path="/presupuestos" element={<ListaPresupuestos />} />
          <Route path="/presupuesto/nuevo" element={<FormPresupuesto />} />
          <Route path="/presupuesto/editar/:id" element={<FormPresupuesto />} />
          <Route path="/objetivos/pnd" element={<ListaObjetivosPND />} />
          <Route path="/objetivos/pnd/nuevo" element={<FormObjetivoPND />} />
          <Route path="/objetivos/pnd/editar/:id" element={<FormObjetivoPND />} />
          <Route path="/objetivos/ods" element={<ListaODS />} />
          <Route path="/objetivos/ods/nuevo" element={<FormODS />} />
          <Route path="/objetivos/ods/editar/:id" element={<FormODS />} />
          <Route path="/objetivos/estrategicos" element={<ListaObjetivosEstrategicos />} />
          <Route path="/objetivos/estrategicos/nuevo" element={<FormObjetivoEstrategico />} />
          <Route path="/objetivos/estrategicos/editar/:id" element={<FormObjetivoEstrategico />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default AppRouter;
