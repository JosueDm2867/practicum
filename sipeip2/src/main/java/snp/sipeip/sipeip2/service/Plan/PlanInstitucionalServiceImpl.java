package snp.sipeip.sipeip2.service.Plan;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.repository.Plan.PlanInstitucionalRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlanInstitucionalServiceImpl implements PlanInstitucionalService {

    private final PlanInstitucionalRepository repository;

    @Override
    public PlanInstitucional guardar(PlanInstitucional plan) {
        return repository.save(plan);
    }

    @Override
    public List<PlanInstitucional> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<PlanInstitucional> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public PlanInstitucional actualizar(Long id, PlanInstitucional plan) {
        plan.setIdPlanInstitucional(id);
        return repository.save(plan);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
