package snp.sipeip.sipeip2.service.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoDesarrolloSostenible;
import snp.sipeip.sipeip2.repository.Objetivos.ObjetivoDesarrolloSostenibleRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ObjetivoODSServiceImpl implements ObjetivoODSService {

    private final ObjetivoDesarrolloSostenibleRepository repository;

    @Override
    public ObjetivoDesarrolloSostenible guardar(ObjetivoDesarrolloSostenible objetivo) {
        return repository.save(objetivo);
    }

    @Override
    public List<ObjetivoDesarrolloSostenible> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<ObjetivoDesarrolloSostenible> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
