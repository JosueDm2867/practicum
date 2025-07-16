package snp.sipeip.sipeip2.controller.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoDesarrolloSostenible;
import snp.sipeip.sipeip2.service.Objetivos.ObjetivoODSService;

import java.util.List;

@RestController
@RequestMapping("/api/objetivos-ods")
@RequiredArgsConstructor
public class ObjetivoODSController {

    private final ObjetivoODSService service;

    @PostMapping
    public ResponseEntity<ObjetivoDesarrolloSostenible> guardar(@RequestBody ObjetivoDesarrolloSostenible objetivo) {
        return ResponseEntity.ok(service.guardar(objetivo));
    }

    @GetMapping
    public ResponseEntity<List<ObjetivoDesarrolloSostenible>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ObjetivoDesarrolloSostenible> obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
