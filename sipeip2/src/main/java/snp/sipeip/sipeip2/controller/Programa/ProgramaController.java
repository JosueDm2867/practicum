package snp.sipeip.sipeip2.controller.Programa;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Programa.Programa;
import snp.sipeip.sipeip2.service.Programa.ProgramaService;

import java.util.List;

@RestController
@RequestMapping("/api/programas")
@RequiredArgsConstructor
public class ProgramaController {

    private final ProgramaService programaService;

    @PostMapping
    public ResponseEntity<Programa> guardar(@RequestBody Programa programa) {
        return ResponseEntity.ok(programaService.guardar(programa));
    }

    @GetMapping
    public ResponseEntity<List<Programa>> listar() {
        return ResponseEntity.ok(programaService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Programa> obtenerPorId(@PathVariable Long id) {
        return programaService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Programa> actualizar(@PathVariable Long id, @RequestBody Programa programa) {
        return ResponseEntity.ok(programaService.actualizar(id, programa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        programaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
