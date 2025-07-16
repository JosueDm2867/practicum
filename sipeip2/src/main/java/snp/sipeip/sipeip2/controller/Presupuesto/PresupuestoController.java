package snp.sipeip.sipeip2.controller.Presupuesto;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.service.Presupuesto.PresupuestoService;

import java.util.List;

@RestController
@RequestMapping("/api/presupuestos")
@RequiredArgsConstructor
public class PresupuestoController {

    private final PresupuestoService presupuestoService;

    @PostMapping
    public ResponseEntity<Presupuesto> guardar(@RequestBody Presupuesto presupuesto) {
        return ResponseEntity.ok(presupuestoService.guardar(presupuesto));
    }

    @GetMapping
    public ResponseEntity<List<Presupuesto>> listar() {
        return ResponseEntity.ok(presupuestoService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Presupuesto> obtenerPorId(@PathVariable Long id) {
        return presupuestoService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Presupuesto> actualizar(@PathVariable Long id, @RequestBody Presupuesto presupuesto) {
        return ResponseEntity.ok(presupuestoService.actualizar(id, presupuesto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        presupuestoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
