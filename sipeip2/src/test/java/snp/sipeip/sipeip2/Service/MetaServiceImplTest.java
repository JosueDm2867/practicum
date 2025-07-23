package snp.sipeip.sipeip2;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Meta.Meta;
import snp.sipeip.sipeip2.repository.Meta.MetaRepository;
import snp.sipeip.sipeip2.service.Meta.MetaServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class MetaServiceImplTest {

    private MetaRepository repository;
    private MetaServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(MetaRepository.class);
        service = new MetaServiceImpl(repository);
    }

    @Test
    void testGuardar() {
        Meta meta = new Meta();
        meta.setDescripcion("Meta A");

        when(repository.save(meta)).thenReturn(meta);

        Meta guardada = service.guardar(meta);

        assertNotNull(guardada);
        assertEquals("Meta A", guardada.getDescripcion());
        verify(repository).save(meta);
    }

    @Test
    void testListar() {
        Meta m1 = new Meta();
        Meta m2 = new Meta();

        when(repository.findAll()).thenReturn(Arrays.asList(m1, m2));

        List<Meta> lista = service.listar();

        assertEquals(2, lista.size());
        verify(repository).findAll();
    }

    @Test
    void testObtenerPorId() {
        Meta meta = new Meta();
        meta.setIdMeta(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(meta));

        Optional<Meta> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdMeta());
        verify(repository).findById(1L);
    }

    @Test
    void testActualizar() {
        Meta meta = new Meta();
        meta.setDescripcion("Meta Actualizada");

        when(repository.save(meta)).thenReturn(meta);

        Meta actualizado = service.actualizar(10L, meta);

        assertEquals(10L, actualizado.getIdMeta());
        assertEquals("Meta Actualizada", actualizado.getDescripcion());
    }
}