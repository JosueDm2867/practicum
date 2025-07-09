package snp.sipeip.sipeip2.service.Plan;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.repository.Plan.PlanInstitucionalRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlanInstitucionalServiceImpl implements PlanInstitucionalService {

    @Autowired
    private PlanInstitucionalRepository repository;

    @Override
    public List<PlanInstitucional> listar() {
        return repository.findAll();
    }

    @Override
    public PlanInstitucional guardar(PlanInstitucional plan) {
        return repository.save(plan);
    }

    @Override
    public PlanInstitucional obtenerPorId(Long id) {
        Optional<PlanInstitucional> plan = repository.findById(id);
        return plan.orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
