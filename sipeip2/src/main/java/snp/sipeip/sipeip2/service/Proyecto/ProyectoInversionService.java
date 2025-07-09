package snp.sipeip.sipeip2.service.Proyecto;

import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

import java.util.List;
import java.util.Optional;

public interface ProyectoInversionService {
    List<ProyectoInversion> listar();
    Optional<ProyectoInversion> obtenerPorId(Long id);
    ProyectoInversion guardar(ProyectoInversion proyecto);
    void eliminar(Long id);
}
