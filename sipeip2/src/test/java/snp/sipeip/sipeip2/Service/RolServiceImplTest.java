package snp.sipeip.sipeip2;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import snp.sipeip.sipeip2.model.Rol.Rol;
import snp.sipeip.sipeip2.repository.Rol.RolRepository;
import snp.sipeip.sipeip2.service.Rol.RolServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class RolServiceImplTest {

    private RolRepository repository;
    private RolServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = mock(RolRepository.class);
        service = new RolServiceImpl(repository);

    }

    @Test
    void testListarTodos() {
        Rol r1 = new Rol();
        Rol r2 = new Rol();

        when(repository.findAll()).thenReturn(Arrays.asList(r1, r2));

        List<Rol> resultado = service.listarTodos();

        assertEquals(2, resultado.size());
        verify(repository, times(1)).findAll();
    }

    @Test
    void testGuardar() {
        Rol rol = new Rol();
        rol.setNombre("Administrador");

        when(repository.save(rol)).thenReturn(rol);

        Rol resultado = service.guardar(rol);

        assertNotNull(resultado);
        assertEquals("Administrador", resultado.getNombre());
        verify(repository, times(1)).save(rol);
    }

    @Test
    void testObtenerPorId() {
        Rol rol = new Rol();
        rol.setIdRol(1L);
        rol.setNombre("Usuario");

        when(repository.findById(1L)).thenReturn(Optional.of(rol));

        Rol resultado = service.obtenerPorId(1L);

        assertNotNull(resultado);
        assertEquals(1L, resultado.getIdRol());
        assertEquals("Usuario", resultado.getNombre());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testEliminar() {
        Long id = 5L;

        doNothing().when(repository).deleteById(id);

        service.eliminar(id);

        verify(repository, times(1)).deleteById(id);
    }
}