package snp.sipeip.sipeip2.service.ActividadOperativa;

import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;

import java.util.List;
import java.util.Optional;

public interface ActividadOperativaService {

    ActividadOperativa guardar(ActividadOperativa actividad);

    List<ActividadOperativa> listar();

    Optional<ActividadOperativa> obtenerPorId(Long id);

    ActividadOperativa actualizar(Long id, ActividadOperativa actividad);

    void eliminar(Long id);
}
