package snp.sipeip.sipeip2.service.Plan;


import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;

import java.util.List;

public interface PlanInstitucionalService {
    List<PlanInstitucional> listar();
    PlanInstitucional guardar(PlanInstitucional plan);
    PlanInstitucional obtenerPorId(Long id);
    void eliminar(Long id);
}
