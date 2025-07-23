package snp.sipeip.sipeip2;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.repository.Presupuesto.PresupuestoRepository;
import snp.sipeip.sipeip2.service.Presupuesto.PresupuestoServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class PresupuestoServiceImplTest {

    private PresupuestoRepository presupuestoRepository;
    private PresupuestoServiceImpl service;

    @BeforeEach
    void setUp() {
        presupuestoRepository = mock(PresupuestoRepository.class);
        service = new PresupuestoServiceImpl(presupuestoRepository);
    }

    @Test
    void testGuardar() {
        Presupuesto presupuesto = new Presupuesto();
        presupuesto.setDescripcion("Presupuesto A");

        when(presupuestoRepository.save(presupuesto)).thenReturn(presupuesto);

        Presupuesto resultado = service.guardar(presupuesto);

        assertNotNull(resultado);
        assertEquals("Presupuesto A", resultado.getDescripcion());
        verify(presupuestoRepository).save(presupuesto);
    }

    @Test
    void testListar() {
        Presupuesto p1 = new Presupuesto();
        Presupuesto p2 = new Presupuesto();

        when(presupuestoRepository.findAll()).thenReturn(Arrays.asList(p1, p2));

        List<Presupuesto> resultado = service.listar();

        assertEquals(2, resultado.size());
        verify(presupuestoRepository).findAll();
    }

    @Test
    void testObtenerPorId() {
        Presupuesto presupuesto = new Presupuesto();
        presupuesto.setIdPresupuesto(1L);

        when(presupuestoRepository.findById(1L)).thenReturn(Optional.of(presupuesto));

        Optional<Presupuesto> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdPresupuesto());
        verify(presupuestoRepository).findById(1L);
    }

    @Test
    void testActualizar() {
        Presupuesto presupuesto = new Presupuesto();
        presupuesto.setDescripcion("Actualizado");

        when(presupuestoRepository.save(presupuesto)).thenReturn(presupuesto);

        Presupuesto actualizado = service.actualizar(5L, presupuesto);

        assertEquals("Actualizado", actualizado.getDescripcion());
        assertEquals(5L, actualizado.getIdPresupuesto());
        verify(presupuestoRepository).save(presupuesto);
    }

    @Test
    void testEliminar() {
        Long id = 3L;

        doNothing().when(presupuestoRepository).deleteById(id);

        service.eliminar(id);

        verify(presupuestoRepository).deleteById(id);
    }
}