package snp.sipeip.sipeip2.controller.Objetivos;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoPlanNacionalDesarrollo;
import snp.sipeip.sipeip2.service.Objetivos.ObjetivoPNDService;

import java.util.List;

@RestController
@RequestMapping("/api/objetivos-pnd")
@RequiredArgsConstructor
public class ObjetivoPNDController {

    private final ObjetivoPNDService service;

    @PostMapping
    public ResponseEntity<ObjetivoPlanNacionalDesarrollo> guardar(@RequestBody ObjetivoPlanNacionalDesarrollo objetivo) {
        return ResponseEntity.ok(service.guardar(objetivo));
    }

    @GetMapping
    public ResponseEntity<List<ObjetivoPlanNacionalDesarrollo>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ObjetivoPlanNacionalDesarrollo> obtenerPorId(@PathVariable Long id) {
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
