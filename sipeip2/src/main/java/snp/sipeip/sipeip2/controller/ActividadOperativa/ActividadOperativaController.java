package snp.sipeip.sipeip2.controller.ActividadOperativa;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;
import snp.sipeip.sipeip2.service.ActividadOperativa.ActividadOperativaService;

import java.util.List;

@RestController
@RequestMapping("/api/actividades-operativas")
@RequiredArgsConstructor
public class ActividadOperativaController {

    private final ActividadOperativaService service;

    @PostMapping
    public ResponseEntity<ActividadOperativa> guardar(@RequestBody ActividadOperativa actividad) {
        return ResponseEntity.ok(service.guardar(actividad));
    }

    @GetMapping
    public ResponseEntity<List<ActividadOperativa>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActividadOperativa> obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ActividadOperativa> actualizar(@PathVariable Long id, @RequestBody ActividadOperativa actividad) {
        return ResponseEntity.ok(service.actualizar(id, actividad));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
