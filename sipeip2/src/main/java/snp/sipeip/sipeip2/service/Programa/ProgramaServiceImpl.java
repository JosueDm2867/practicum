package snp.sipeip.sipeip2.service.Programa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Programa.Programa;
import snp.sipeip.sipeip2.repository.Programa.ProgramaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramaServiceImpl implements ProgramaService {

    @Autowired
    private ProgramaRepository programaRepository;

    @Override
    public List<Programa> listarTodos() {
        return programaRepository.findAll();
    }

    @Override
    public Optional<Programa> obtenerPorId(Long id) {
        return programaRepository.findById(id);
    }

    @Override
    public Programa guardar(Programa programa) {
        return programaRepository.save(programa);
    }

    @Override
    public void eliminar(Long id) {
        programaRepository.deleteById(id);
    }
}
