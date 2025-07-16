package snp.sipeip.sipeip2.service.Presupuesto;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.repository.Presupuesto.PresupuestoRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PresupuestoServiceImpl implements PresupuestoService {

    private final PresupuestoRepository presupuestoRepository;

    @Override
    public Presupuesto guardar(Presupuesto presupuesto) {
        return presupuestoRepository.save(presupuesto);
    }

    @Override
    public List<Presupuesto> listar() {
        return presupuestoRepository.findAll();
    }

    @Override
    public Optional<Presupuesto> obtenerPorId(Long id) {
        return presupuestoRepository.findById(id);
    }

    @Override
    public Presupuesto actualizar(Long id, Presupuesto presupuesto) {
        presupuesto.setIdPresupuesto(id);
        return presupuestoRepository.save(presupuesto);
    }

    @Override
    public void eliminar(Long id) {
        presupuestoRepository.deleteById(id);
    }
}
