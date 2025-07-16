package snp.sipeip.sipeip2.controller.Meta;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Meta.Meta;
import snp.sipeip.sipeip2.service.Meta.MetaService;

import java.util.List;

@RestController
@RequestMapping("/api/metas")
@RequiredArgsConstructor
public class MetaController {

    private final MetaService metaService;

    @PostMapping
    public ResponseEntity<Meta> guardar(@RequestBody Meta meta) {
        return ResponseEntity.ok(metaService.guardar(meta));
    }

    @GetMapping
    public ResponseEntity<List<Meta>> listar() {
        return ResponseEntity.ok(metaService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meta> obtenerPorId(@PathVariable Long id) {
        return metaService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Meta> actualizar(@PathVariable Long id, @RequestBody Meta meta) {
        return ResponseEntity.ok(metaService.actualizar(id, meta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        metaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
