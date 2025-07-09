package snp.sipeip.sipeip2.service.ActividadOperativa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;
import snp.sipeip.sipeip2.repository.ActividadOperativa.ActividadOperativaRepository;

import java.util.List;

@Service
public class ActividadOperativaServiceImpl implements ActividadOperativaService {

    @Autowired
    private ActividadOperativaRepository repository;

    @Override
    public List<ActividadOperativa> listarTodos() {
        return repository.findAll();
    }

    @Override
    public ActividadOperativa guardar(ActividadOperativa actividad) {
        return repository.save(actividad);
    }

    @Override
    public ActividadOperativa obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
