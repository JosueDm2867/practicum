package snp.sipeip.sipeip2;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.ActividadOperativa.ActividadOperativa;
import snp.sipeip.sipeip2.repository.ActividadOperativa.ActividadOperativaRepository;
import snp.sipeip.sipeip2.service.ActividadOperativa.ActividadOperativaServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ActividadOperativaServiceImplTest {

    private ActividadOperativaRepository repository;
    private ActividadOperativaServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(ActividadOperativaRepository.class);
        service = new ActividadOperativaServiceImpl(repository);
    }

    @Test
    void testGuardar() {
        ActividadOperativa actividad = new ActividadOperativa();
        actividad.setDescripcion("Capacitación");

        when(repository.save(actividad)).thenReturn(actividad);

        ActividadOperativa resultado = service.guardar(actividad);

        assertNotNull(resultado);
        assertEquals("Capacitación", resultado.getDescripcion());
        verify(repository).save(actividad);
    }

    @Test
    void testListar() {
        ActividadOperativa a1 = new ActividadOperativa();
        ActividadOperativa a2 = new ActividadOperativa();

        when(repository.findAll()).thenReturn(Arrays.asList(a1, a2));

        List<ActividadOperativa> lista = service.listar();

        assertEquals(2, lista.size());
        verify(repository).findAll();
    }

    @Test
    void testObtenerPorIdExistente() {
        ActividadOperativa actividad = new ActividadOperativa();
        actividad.setIdActividad(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(actividad));

        Optional<ActividadOperativa> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdActividad());
        verify(repository).findById(1L);
    }

    @Test
    void testObtenerPorIdInexistente() {
        when(repository.findById(99L)).thenReturn(Optional.empty());

        Optional<ActividadOperativa> resultado = service.obtenerPorId(99L);

        assertFalse(resultado.isPresent());
        verify(repository).findById(99L);
    }

    @Test
    void testActualizar() {
        ActividadOperativa actividad = new ActividadOperativa();
        actividad.setDescripcion("Original");

        when(repository.save(actividad)).thenReturn(actividad);

        ActividadOperativa actualizada = service.actualizar(10L, actividad);

        assertEquals(10L, actualizada.getIdActividad());
        verify(repository).save(actividad);
    }

    @Test
    void testEliminar() {
        doNothing().when(repository).deleteById(5L);

        service.eliminar(5L);

        verify(repository).deleteById(5L);
    }
}