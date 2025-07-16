package snp.sipeip.sipeip2.service.Programa;

import snp.sipeip.sipeip2.model.Programa.Programa;

import java.util.List;
import java.util.Optional;

public interface ProgramaService {
    Programa guardar(Programa programa);
    List<Programa> listar();
    Optional<Programa> obtenerPorId(Long id);
    Programa actualizar(Long id, Programa programa);
    void eliminar(Long id);
}
