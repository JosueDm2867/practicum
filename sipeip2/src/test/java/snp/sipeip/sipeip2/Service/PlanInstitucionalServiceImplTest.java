package snp.sipeip.sipeip2.Service;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.repository.Plan.PlanInstitucionalRepository;
import snp.sipeip.sipeip2.service.Plan.PlanInstitucionalServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class PlanInstitucionalServiceImplTest {

    private PlanInstitucionalRepository repository;
    private PlanInstitucionalServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(PlanInstitucionalRepository.class);
        service = new PlanInstitucionalServiceImpl(repository);
    }

    @Test
    void testGuardar() {
        PlanInstitucional plan = new PlanInstitucional();
        plan.setNombrePlan("Plan A");

        when(repository.save(plan)).thenReturn(plan);

        PlanInstitucional guardado = service.guardar(plan);

        assertNotNull(guardado);
        assertEquals("Plan A", guardado.getNombrePlan());
        verify(repository).save(plan);
    }

    @Test
    void testListar() {
        PlanInstitucional p1 = new PlanInstitucional();
        PlanInstitucional p2 = new PlanInstitucional();

        when(repository.findAll()).thenReturn(Arrays.asList(p1, p2));

        List<PlanInstitucional> lista = service.listar();

        assertEquals(2, lista.size());
        verify(repository).findAll();
    }

    @Test
    void testObtenerPorId() {
        PlanInstitucional plan = new PlanInstitucional();
        plan.setIdPlanInstitucional(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(plan));

        Optional<PlanInstitucional> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdPlanInstitucional());
        verify(repository).findById(1L);
    }

    @Test
    void testActualizar() {
        PlanInstitucional plan = new PlanInstitucional();
        plan.setNombrePlan("Plan Actualizado");

        when(repository.save(plan)).thenReturn(plan);

        PlanInstitucional actualizado = service.actualizar(10L, plan);

        assertEquals(10L, actualizado.getIdPlanInstitucional());
        assertEquals("Plan Actualizado", actualizado.getNombrePlan());
        verify(repository).save(plan);
    }

    @Test
    void testEliminar() {
        Long id = 99L;

        doNothing().when(repository).deleteById(id);

        service.eliminar(id);

        verify(repository).deleteById(id);
    }
}