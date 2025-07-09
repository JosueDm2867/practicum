package snp.sipeip.sipeip2.controller.UnidadOrganizacional;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;
import snp.sipeip.sipeip2.service.UnidadOrganizacional.UnidadOrganizacionalService;
import java.util.List;

@RestController
@RequestMapping("/api/unidades")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UnidadOrganizacionalController {

    private final UnidadOrganizacionalService service;

    @GetMapping
    public List<UnidadOrganizacional> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public UnidadOrganizacional obtener(@PathVariable Long id) {
        return service.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public UnidadOrganizacional crear(@RequestBody UnidadOrganizacional unidad) {
        return service.guardar(unidad);
    }

    @PutMapping("/{id}")
    public UnidadOrganizacional actualizar(@PathVariable Long id, @RequestBody UnidadOrganizacional unidad) {
        unidad.setIdUnidadOrganizacional(id);
        return service.guardar(unidad);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
