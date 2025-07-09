package snp.sipeip.sipeip2.controller.Proyecto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.service.Proyecto.ProyectoInversionService;

import java.util.List;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "*")
public class ProyectoInversionController {

    @Autowired
    private ProyectoInversionService service;

    @GetMapping
    public List<ProyectoInversion> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public ProyectoInversion obtener(@PathVariable Long id) {
        return service.obtenerPorId(id).orElse(null);
    }

    @PostMapping
    public ProyectoInversion guardar(@RequestBody ProyectoInversion proyecto) {
        return service.guardar(proyecto);
    }

    @PutMapping("/{id}")
    public ProyectoInversion actualizar(@PathVariable Long id, @RequestBody ProyectoInversion proyecto) {
        proyecto.setIdProyecto(id);
        return service.guardar(proyecto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
