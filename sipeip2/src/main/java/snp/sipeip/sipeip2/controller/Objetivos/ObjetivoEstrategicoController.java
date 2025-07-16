package snp.sipeip.sipeip2.controller.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoEstrategico;
import snp.sipeip.sipeip2.service.Objetivos.ObjetivoEstrategicoService;

import java.util.List;

@RestController
@RequestMapping("/api/objetivos-estrategicos")
@RequiredArgsConstructor
public class ObjetivoEstrategicoController {

    private final ObjetivoEstrategicoService service;

    @GetMapping
    public ResponseEntity<List<ObjetivoEstrategico>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping
    public ResponseEntity<ObjetivoEstrategico> guardar(@RequestBody ObjetivoEstrategico objetivo) {
        return ResponseEntity.ok(service.guardar(objetivo));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ObjetivoEstrategico> obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ObjetivoEstrategico> actualizar(@PathVariable Long id, @RequestBody ObjetivoEstrategico objetivo) {
        return ResponseEntity.ok(service.actualizar(id, objetivo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
