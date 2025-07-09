package snp.sipeip.sipeip2.service.Entidad;

import snp.sipeip.sipeip2.model.Entidad.Entidad;
import java.util.List;

public interface EntidadService {
    List<Entidad> listarTodas();
    Entidad guardar(Entidad entidad);
    Entidad buscarPorId(Long id);
    void eliminar(Long id);
}

