package snp.sipeip.sipeip2.service.Plan;

import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;

import java.util.List;
import java.util.Optional;

public interface PlanInstitucionalService {
    PlanInstitucional guardar(PlanInstitucional plan);
    List<PlanInstitucional> listar();
    Optional<PlanInstitucional> obtenerPorId(Long id);
    PlanInstitucional actualizar(Long id, PlanInstitucional plan);
    void eliminar(Long id);
}
