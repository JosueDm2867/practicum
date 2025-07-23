package snp.sipeip.sipeip2.controller.Proyecto;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import snp.sipeip.sipeip2.dto.ReporteProyectoDTO;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.service.Proyecto.ProyectoInversionService;

import java.util.List;

@RestController
@RequestMapping("/api/proyectos")
@RequiredArgsConstructor
public class ProyectoInversionController {

    private final ProyectoInversionService proyectoService;

    @PostMapping
    public ResponseEntity<ProyectoInversion> guardar(@RequestBody ProyectoInversion proyecto) {
        return ResponseEntity.ok(proyectoService.guardar(proyecto));
    }

    @GetMapping
    public ResponseEntity<List<ProyectoInversion>> listar() {
        return ResponseEntity.ok(proyectoService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProyectoInversion> obtenerPorId(@PathVariable Long id) {
        return proyectoService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProyectoInversion> actualizar(@PathVariable Long id, @RequestBody ProyectoInversion proyecto) {
        return ResponseEntity.ok(proyectoService.actualizar(id, proyecto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        proyectoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // @GetMapping("/reporte")
    // public ResponseEntity<List<ReporteProyectoDTO>> reporteProyectos(
    //         @RequestParam(required = false) Long entidadId,
    //         @RequestParam(required = false) String estado,
    //         @RequestParam(required = false) Long responsableId
    // ) {
    //     List<ReporteProyectoDTO> reporte = proyectoService.obtenerReporteProyectos(entidadId, estado, responsableId);
    //     return ResponseEntity.ok(reporte);
    // }
}
