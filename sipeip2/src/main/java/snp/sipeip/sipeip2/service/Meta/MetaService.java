package snp.sipeip.sipeip2.service.Meta;

import snp.sipeip.sipeip2.model.Meta.Meta;

import java.util.List;
import java.util.Optional;

public interface MetaService {
    Meta guardar(Meta meta);

    List<Meta> listar();

    Optional<Meta> obtenerPorId(Long id);

    Meta actualizar(Long id, Meta meta);

    void eliminar(Long id);
}
