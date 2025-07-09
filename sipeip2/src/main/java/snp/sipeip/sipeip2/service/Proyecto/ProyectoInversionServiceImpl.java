package snp.sipeip.sipeip2.service.Proyecto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.repository.Proyecto.ProyectoInversionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoInversionServiceImpl implements ProyectoInversionService {

    @Autowired
    private ProyectoInversionRepository repository;

    @Override
    public List<ProyectoInversion> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<ProyectoInversion> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public ProyectoInversion guardar(ProyectoInversion proyecto) {
        return repository.save(proyecto);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
