package snp.sipeip.sipeip2.service.Programa;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Programa.Programa;
import snp.sipeip.sipeip2.repository.Programa.ProgramaRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProgramaServiceImpl implements ProgramaService {

    private final ProgramaRepository programaRepository;

    @Override
    public Programa guardar(Programa programa) {
        return programaRepository.save(programa);
    }

    @Override
    public List<Programa> listar() {
        return programaRepository.findAll();
    }

    @Override
    public Optional<Programa> obtenerPorId(Long id) {
        return programaRepository.findById(id);
    }

    @Override
    public Programa actualizar(Long id, Programa programa) {
        programa.setIdPrograma(id);
        return programaRepository.save(programa);
    }

    @Override
    public void eliminar(Long id) {
        programaRepository.deleteById(id);
    }
}
