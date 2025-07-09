package snp.sipeip.sipeip2.service.Presupuesto;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.repository.Presupuesto.PresupuestoRepository;

import java.util.List;

@Service
public class PresupuestoServiceImpl implements PresupuestoService {

    @Autowired
    private PresupuestoRepository repository;

    @Override
    public List<Presupuesto> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Presupuesto guardar(Presupuesto presupuesto) {
        return repository.save(presupuesto);
    }

    @Override
    public Presupuesto obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
