package snp.sipeip.sipeip2.controller.Plan;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.service.Plan.PlanInstitucionalService;

import java.util.List;

@RestController
@RequestMapping("/api/planes")
@CrossOrigin(origins = "*")
public class PlanInstitucionalController {

    @Autowired
    private PlanInstitucionalService service;

    @GetMapping
    public List<PlanInstitucional> listar() {
        return service.listar();
    }

    @PostMapping
    public PlanInstitucional guardar(@RequestBody PlanInstitucional plan) {
        return service.guardar(plan);
    }

    @GetMapping("/{id}")
    public PlanInstitucional obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @PutMapping("/{id}")
    public PlanInstitucional actualizar(@PathVariable Long id, @RequestBody PlanInstitucional plan) {
        plan.setIdPlanInstitucional(id);
        return service.guardar(plan);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
