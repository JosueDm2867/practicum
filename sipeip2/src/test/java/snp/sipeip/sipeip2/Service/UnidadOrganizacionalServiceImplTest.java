package snp.sipeip.sipeip2.Service;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;
import snp.sipeip.sipeip2.repository.UnidadOrganizacional.UnidadOrganizacionalRepository;
import snp.sipeip.sipeip2.service.UnidadOrganizacional.UnidadOrganizacionalServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UnidadOrganizacionalServiceImplTest {

    private UnidadOrganizacionalRepository repository;
    private UnidadOrganizacionalServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(UnidadOrganizacionalRepository.class);
        service = new UnidadOrganizacionalServiceImpl(repository);
    }

    @Test
    void testListar() {
        UnidadOrganizacional u1 = new UnidadOrganizacional();
        UnidadOrganizacional u2 = new UnidadOrganizacional();
        when(repository.findAll()).thenReturn(Arrays.asList(u1, u2));

        List<UnidadOrganizacional> resultado = service.listar();

        assertEquals(2, resultado.size());
        verify(repository, times(1)).findAll();
    }

    @Test
    void testBuscarPorId() {
        UnidadOrganizacional unidad = new UnidadOrganizacional();
        unidad.setIdUnidadOrganizacional(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(unidad));

        Optional<UnidadOrganizacional> resultado = service.buscarPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getIdUnidadOrganizacional());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testGuardarNuevo() {
        UnidadOrganizacional unidad = new UnidadOrganizacional();
        unidad.setNombre("Unidad A");
        unidad.setIdUnidadOrganizacional(null); 

        when(repository.save(any(UnidadOrganizacional.class))).thenAnswer(invocation -> invocation.getArgument(0));

        UnidadOrganizacional guardado = service.guardar(unidad);

        assertNotNull(guardado.getFechaCreacion());
        assertNotNull(guardado.getFechaActualizacion());
        verify(repository, times(1)).save(unidad);
    }

    @Test
    void testGuardarExistente() {
        UnidadOrganizacional unidad = new UnidadOrganizacional();
        unidad.setIdUnidadOrganizacional(5L); // Simula actualización

        when(repository.save(any(UnidadOrganizacional.class))).thenAnswer(invocation -> invocation.getArgument(0));

        UnidadOrganizacional resultado = service.guardar(unidad);

        assertNotNull(resultado.getFechaActualizacion());
        verify(repository, times(1)).save(unidad);
    }

    @Test
    void testEliminar() {
        Long id = 10L;

        doNothing().when(repository).deleteById(id);

        service.eliminar(id);

        verify(repository, times(1)).deleteById(id);
    }
}