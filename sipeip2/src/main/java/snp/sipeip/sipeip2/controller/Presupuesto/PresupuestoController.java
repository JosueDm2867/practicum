package snp.sipeip.sipeip2.controller.Presupuesto;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.service.Presupuesto.PresupuestoService;

import java.util.List;

@RestController
@RequestMapping("/api/presupuestos")
@CrossOrigin(origins = "*")
public class PresupuestoController {

    @Autowired
    private PresupuestoService service;

    @GetMapping
    public List<Presupuesto> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public Presupuesto obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @PostMapping
    public Presupuesto crear(@RequestBody Presupuesto presupuesto) {
        return service.guardar(presupuesto);
    }

    @PutMapping("/{id}")
    public Presupuesto actualizar(@PathVariable Long id, @RequestBody Presupuesto presupuesto) {
        presupuesto.setIdPresupuesto(id);
        return service.guardar(presupuesto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
