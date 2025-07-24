package snp.sipeip.sipeip2.Service;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import snp.sipeip.sipeip2.model.Rol.Rol;
import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.repository.Usuario.UsuarioRepository;
import snp.sipeip.sipeip2.service.Usuario.UsuarioServiceImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UsuarioServiceImplTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @InjectMocks
    private UsuarioServiceImpl usuarioService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testListarTodos() {
        Rol rol = new Rol(1L, "Admin", "Administrador", "ACTIVO");
        Usuario u1 = new Usuario(1L, "Juan", "Pérez", "123", "juan@test.com", "pass", "ACTIVO", null, null, rol);
        Usuario u2 = new Usuario(2L, "Ana", "Gomez", "456", "ana@test.com", "pass", "ACTIVO", null, null, rol);

        when(usuarioRepository.findAll()).thenReturn(Arrays.asList(u1, u2));

        List<Usuario> usuarios = usuarioService.listarTodos();

        assertEquals(2, usuarios.size());
        verify(usuarioRepository, times(1)).findAll();
    }

    @Test
    public void testGuardar() {
        Rol rol = new Rol(1L, "Admin", "Administrador", "ACTIVO");
        Usuario usuario = new Usuario(null, "Luis", "Martinez", "789", "luis@test.com", "pass", "ACTIVO", null, null, rol);

        when(usuarioRepository.save(usuario)).thenReturn(usuario);

        Usuario guardado = usuarioService.guardar(usuario);

        assertNotNull(guardado);
        assertEquals("Luis", guardado.getNombre());
        verify(usuarioRepository).save(usuario);
    }
    @Test
    public void testBuscarPorIdExistente() {
        Rol rol = new Rol(1L, "Admin", "Administrador", "ACTIVO");
        Usuario usuario = new Usuario(1L, "Carlos", "Vega", "999", "carlos@test.com", "pass", "ACTIVO", null, null, rol);

        when(usuarioRepository.findById(1L)).thenReturn(Optional.of(usuario));

        Usuario resultado = usuarioService.buscarPorId(1L);

        assertNotNull(resultado);
        assertEquals("Carlos", resultado.getNombre());
    }
    @Test
    public void testBuscarPorIdNoExistente() {
        when(usuarioRepository.findById(99L)).thenReturn(Optional.empty());

        Usuario resultado = usuarioService.buscarPorId(99L);

        assertNull(resultado);
    }

    @Test
    public void testEliminar() {
        Long id = 1L;

        usuarioService.eliminar(id);

        verify(usuarioRepository, times(1)).deleteById(id);
    }

    
}

