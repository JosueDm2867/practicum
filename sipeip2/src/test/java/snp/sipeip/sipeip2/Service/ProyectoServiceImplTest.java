package snp.sipeip.sipeip2;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.repository.Proyecto.ProyectoInversionRepository;
import snp.sipeip.sipeip2.service.Proyecto.ProyectoInversionServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ProyectoInversionServiceImplTest {

    private ProyectoInversionRepository proyectoRepository;
    private ProyectoInversionServiceImpl service;

    @BeforeEach
    void setUp() {
        proyectoRepository = mock(ProyectoInversionRepository.class);
        service = new ProyectoInversionServiceImpl(proyectoRepository);
    }

    @Test
    void testGuardar() {
        ProyectoInversion proyecto = new ProyectoInversion();
        proyecto.setNombre("Nuevo Proyecto");

        when(proyectoRepository.save(proyecto)).thenReturn(proyecto);

        ProyectoInversion resultado = service.guardar(proyecto);

        assertNotNull(resultado);
        assertEquals("Nuevo Proyecto", resultado.getNombre());
        verify(proyectoRepository, times(1)).save(proyecto);
    }

    @Test
    void testListar() {
        ProyectoInversion p1 = new ProyectoInversion();
        ProyectoInversion p2 = new ProyectoInversion();

        when(proyectoRepository.findAll()).thenReturn(Arrays.asList(p1, p2));

        List<ProyectoInversion> lista = service.listar();

        assertEquals(2, lista.size());
        verify(proyectoRepository).findAll();
    }

    @Test
    void testObtenerPorId() {
        ProyectoInversion proyecto = new ProyectoInversion();
        proyecto.setIdProyecto(1L);

        when(proyectoRepository.findById(1L)).thenReturn(Optional.of(proyecto));

        Optional<ProyectoInversion> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdProyecto());
        verify(proyectoRepository).findById(1L);
    }

    @Test
    void testActualizar() {
        ProyectoInversion proyecto = new ProyectoInversion();
        proyecto.setNombre("Actualizado");

        when(proyectoRepository.save(proyecto)).thenReturn(proyecto);

        ProyectoInversion actualizado = service.actualizar(5L, proyecto);

        assertEquals("Actualizado", actualizado.getNombre());
        assertEquals(5L, actualizado.getIdProyecto());
        verify(proyectoRepository).save(proyecto);
    }

    @Test
    void testEliminar() {
        Long id = 3L;

        doNothing().when(proyectoRepository).deleteById(id);

        service.eliminar(id);

        verify(proyectoRepository).deleteById(id);
    }
}