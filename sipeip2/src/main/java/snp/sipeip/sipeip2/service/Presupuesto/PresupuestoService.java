package snp.sipeip.sipeip2.service.Presupuesto;


import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;

import java.util.List;

public interface PresupuestoService {
    List<Presupuesto> listarTodos();
    Presupuesto guardar(Presupuesto presupuesto);
    Presupuesto obtenerPorId(Long id);
    void eliminar(Long id);
}
