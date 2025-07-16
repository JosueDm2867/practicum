package snp.sipeip.sipeip2.service.ActividadOperativa;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;
import snp.sipeip.sipeip2.repository.ActividadOperativa.ActividadOperativaRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ActividadOperativaServiceImpl implements ActividadOperativaService {

    private final ActividadOperativaRepository repository;

    @Override
    public ActividadOperativa guardar(ActividadOperativa actividad) {
        return repository.save(actividad);
    }

    @Override
    public List<ActividadOperativa> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<ActividadOperativa> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public ActividadOperativa actualizar(Long id, ActividadOperativa actividad) {
        actividad.setIdActividad(id);
        return repository.save(actividad);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
