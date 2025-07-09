package snp.sipeip.sipeip2.service.ActividadOperativa;


import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;

import java.util.List;

public interface ActividadOperativaService {
    List<ActividadOperativa> listarTodos();
    ActividadOperativa guardar(ActividadOperativa actividad);
    ActividadOperativa obtenerPorId(Long id);
    void eliminar(Long id);
}
