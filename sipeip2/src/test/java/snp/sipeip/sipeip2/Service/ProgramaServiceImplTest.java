package snp.sipeip.sipeip2;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Programa.Programa;
import snp.sipeip.sipeip2.repository.Programa.ProgramaRepository;
import snp.sipeip.sipeip2.service.Programa.ProgramaServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ProgramaServiceImplTest {

    private ProgramaRepository programaRepository;
    private ProgramaServiceImpl service;

    @BeforeEach
    void setUp() {
        programaRepository = mock(ProgramaRepository.class);
        service = new ProgramaServiceImpl(programaRepository);
    }

    @Test
    void testGuardar() {
        Programa programa = new Programa();
        programa.setNombrePrograma("Programa A");

        when(programaRepository.save(programa)).thenReturn(programa);

        Programa resultado = service.guardar(programa);

        assertNotNull(resultado);
        assertEquals("Programa A", resultado.getNombrePrograma());
        verify(programaRepository).save(programa);
    }

    @Test
    void testListar() {
        Programa p1 = new Programa();
        Programa p2 = new Programa();

        when(programaRepository.findAll()).thenReturn(Arrays.asList(p1, p2));

        List<Programa> resultado = service.listar();

        assertEquals(2, resultado.size());
        verify(programaRepository).findAll();
    }

    @Test
    void testObtenerPorId() {
        Programa programa = new Programa();
        programa.setIdPrograma(1L);

        when(programaRepository.findById(1L)).thenReturn(Optional.of(programa));

        Optional<Programa> resultado = service.obtenerPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdPrograma());
        verify(programaRepository).findById(1L);
    }

    @Test
    void testActualizar() {
        Programa programa = new Programa();
        programa.setNombrePrograma("Actualizado");

        when(programaRepository.save(programa)).thenReturn(programa);

        Programa actualizado = service.actualizar(5L, programa);

        assertEquals("Actualizado", actualizado.getNombrePrograma());
        assertEquals(5L, actualizado.getIdPrograma());
        verify(programaRepository).save(programa);
    }

    @Test
    void testEliminar() {
        Long id = 3L;

        doNothing().when(programaRepository).deleteById(id);

        service.eliminar(id);

        verify(programaRepository).deleteById(id);
    }
}