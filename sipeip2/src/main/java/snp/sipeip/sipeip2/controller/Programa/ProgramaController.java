package snp.sipeip.sipeip2.controller.Programa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Programa.Programa;
import snp.sipeip.sipeip2.service.Programa.ProgramaService;

import java.util.List;

@RestController
@RequestMapping("/api/programas")
public class ProgramaController {

    @Autowired
    private ProgramaService programaService;

    @GetMapping
    public List<Programa> listarTodos() {
        return programaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Programa> obtenerPorId(@PathVariable Long id) {
        return programaService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Programa guardar(@RequestBody Programa programa) {
        return programaService.guardar(programa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Programa> actualizar(@PathVariable Long id, @RequestBody Programa programa) {
        return programaService.obtenerPorId(id)
                .map(p -> {
                    programa.setIdPrograma(id);
                    return ResponseEntity.ok(programaService.guardar(programa));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        return programaService.obtenerPorId(id)
                .map(p -> {
                    programaService.eliminar(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
