package snp.sipeip.sipeip2.service.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoPlanNacionalDesarrollo;
import snp.sipeip.sipeip2.repository.Objetivos.ObjetivoPlanNacionalDesarrolloRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ObjetivoPNDServiceImpl implements ObjetivoPNDService {

    private final ObjetivoPlanNacionalDesarrolloRepository repository;

    @Override
    public ObjetivoPlanNacionalDesarrollo guardar(ObjetivoPlanNacionalDesarrollo objetivo) {
        return repository.save(objetivo);
    }

    @Override
    public List<ObjetivoPlanNacionalDesarrollo> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<ObjetivoPlanNacionalDesarrollo> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
