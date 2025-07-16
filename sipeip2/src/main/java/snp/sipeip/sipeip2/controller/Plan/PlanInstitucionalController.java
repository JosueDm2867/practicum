package snp.sipeip.sipeip2.controller.Plan;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.service.Plan.PlanInstitucionalService;

import java.util.List;

@RestController
@RequestMapping("/api/planes")
@RequiredArgsConstructor
public class PlanInstitucionalController {

    private final PlanInstitucionalService service;

    @PostMapping
    public ResponseEntity<PlanInstitucional> guardar(@RequestBody PlanInstitucional plan) {
        return ResponseEntity.ok(service.guardar(plan));
    }

    @GetMapping
    public ResponseEntity<List<PlanInstitucional>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlanInstitucional> obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlanInstitucional> actualizar(@PathVariable Long id, @RequestBody PlanInstitucional plan) {
        return ResponseEntity.ok(service.actualizar(id, plan));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
