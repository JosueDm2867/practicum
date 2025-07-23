package snp.sipeip.sipeip2;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Entidad.Entidad;
import snp.sipeip.sipeip2.repository.Entidad.EntidadRepository;
import snp.sipeip.sipeip2.service.Entidad.EntidadServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class EntidadServiceImplTest {

    private EntidadRepository repository;
    private EntidadServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(EntidadRepository.class);
        service = new EntidadServiceImpl(repository); // Usamos el constructor
    }

    @Test
    void testListarTodas() {
        Entidad e1 = new Entidad();
        Entidad e2 = new Entidad();

        when(repository.findAll()).thenReturn(Arrays.asList(e1, e2));

        List<Entidad> resultado = service.listarTodas();

        assertEquals(2, resultado.size());
        verify(repository).findAll();
    }

    @Test
    void testBuscarPorIdEncontrado() {
        Entidad entidad = new Entidad();
        entidad.setIdEntidad(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(entidad));

        Entidad resultado = service.buscarPorId(1L);

        assertNotNull(resultado);
        assertEquals(1L, resultado.getIdEntidad());
        verify(repository).findById(1L);
    }

    @Test
    void testBuscarPorIdNoEncontrado() {
        when(repository.findById(99L)).thenReturn(Optional.empty());

        Entidad resultado = service.buscarPorId(99L);

        assertNull(resultado);
        verify(repository).findById(99L);
    }

    @Test
    void testGuardar() {
        Entidad entidad = new Entidad();
        entidad.setNombre("Entidad X");

        when(repository.save(entidad)).thenReturn(entidad);

        Entidad resultado = service.guardar(entidad);

        assertEquals("Entidad X", resultado.getNombre());
        verify(repository).save(entidad);
    }

    @Test
    void testEliminar() {
        Long id = 5L;

        doNothing().when(repository).deleteById(id);

        service.eliminar(id);

        verify(repository).deleteById(id);
    }
}