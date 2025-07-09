package snp.sipeip.sipeip2.service.Programa;


import snp.sipeip.sipeip2.model.Programa.Programa;

import java.util.List;
import java.util.Optional;

public interface ProgramaService {
    List<Programa> listarTodos();
    Optional<Programa> obtenerPorId(Long id);
    Programa guardar(Programa programa);
    void eliminar(Long id);
}
