package snp.sipeip.sipeip2.controller.ActividadOperativa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;
import snp.sipeip.sipeip2.service.ActividadOperativa.ActividadOperativaService;

import java.util.List;

@RestController
@RequestMapping("/api/actividades")
@CrossOrigin(origins = "*")
public class ActividadOperativaController {

    @Autowired
    private ActividadOperativaService service;

    @GetMapping
    public List<ActividadOperativa> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ActividadOperativa obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @PostMapping
    public ActividadOperativa crear(@RequestBody ActividadOperativa actividad) {
        return service.guardar(actividad);
    }

    @PutMapping("/{id}")
    public ActividadOperativa actualizar(@PathVariable Long id, @RequestBody ActividadOperativa actividad) {
        actividad.setIdActividad(id);
        return service.guardar(actividad);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
