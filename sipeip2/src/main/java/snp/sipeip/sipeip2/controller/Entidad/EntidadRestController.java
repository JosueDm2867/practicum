package snp.sipeip.sipeip2.controller.Entidad;


import snp.sipeip.sipeip2.model.Entidad.Entidad;
import snp.sipeip.sipeip2.service.Entidad.EntidadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/entidades")
public class EntidadRestController {

    @Autowired
    private EntidadService entidadService;

    @GetMapping
    public List<Entidad> listarTodas() {
        return entidadService.listarTodas();
    }

    @GetMapping("/{id}")
    public Entidad obtenerPorId(@PathVariable Long id) {
        return entidadService.buscarPorId(id);
    }

    @PostMapping
    public Entidad crear(@RequestBody Entidad entidad) {
        return entidadService.guardar(entidad);
    }

    @PutMapping("/{id}")
    public Entidad actualizar(@PathVariable Long id, @RequestBody Entidad entidad) {
        entidad.setIdEntidad(id);
        return entidadService.guardar(entidad);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        entidadService.eliminar(id);
    }
}
