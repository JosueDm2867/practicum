package snp.sipeip.sipeip2.service.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoEstrategico;
import snp.sipeip.sipeip2.repository.Objetivos.ObjetivoEstrategicoRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ObjetivoEstrategicoServiceImpl implements ObjetivoEstrategicoService {

    private final ObjetivoEstrategicoRepository repository;

    @Override
    public ObjetivoEstrategico guardar(ObjetivoEstrategico objetivo) {
        return repository.save(objetivo);
    }

    @Override
    public List<ObjetivoEstrategico> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<ObjetivoEstrategico> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public ObjetivoEstrategico actualizar(Long id, ObjetivoEstrategico objetivo) {
        objetivo.setIdObjetivo(id);
        return repository.save(objetivo);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}

