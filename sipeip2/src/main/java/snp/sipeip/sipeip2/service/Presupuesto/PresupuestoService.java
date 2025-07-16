package snp.sipeip.sipeip2.service.Presupuesto;

import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import java.util.List;
import java.util.Optional;

public interface PresupuestoService {
    Presupuesto guardar(Presupuesto presupuesto);
    List<Presupuesto> listar(); // ← Este método es el que te falta
    Optional<Presupuesto> obtenerPorId(Long id);
    Presupuesto actualizar(Long id, Presupuesto presupuesto);
    void eliminar(Long id);
}
