package snp.sipeip.sipeip2.service.Proyecto;

import snp.sipeip.sipeip2.dto.ReporteProyectoDTO;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

import java.util.List;
import java.util.Optional;

public interface ProyectoInversionService {
    ProyectoInversion guardar(ProyectoInversion proyecto);
    List<ProyectoInversion> listar();
    Optional<ProyectoInversion> obtenerPorId(Long id);
    ProyectoInversion actualizar(Long id, ProyectoInversion proyecto);
    void eliminar(Long id);
    // List<ReporteProyectoDTO> obtenerReporteProyectos(Long entidadId, String estado, Long responsableId);
}
