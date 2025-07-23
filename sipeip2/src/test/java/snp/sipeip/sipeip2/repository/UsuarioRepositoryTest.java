package snp.sipeip.sipeip2;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import snp.sipeip.sipeip2.model.Rol.Rol;
import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.repository.Rol.RolRepository;
import snp.sipeip.sipeip2.repository.Usuario.UsuarioRepository;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class UsuarioRepositoryTest {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository; 

    @Test
    public void testGuardarYListarUsuarios() {
        Rol rol = new Rol(null, "Admin", "Rol de administrador", "ACTIVO");
        rol = rolRepository.save(rol);

        Usuario usuario = Usuario.builder()
                .nombre("Luis")
                .apellido("Cruz")
                .cedula("010203")
                .correo("luis@correo.com")
                .password("123456")
                .estado("ACTIVO")
                .rol(rol)
                .build();

        usuarioRepository.save(usuario);

        List<Usuario> usuarios = usuarioRepository.findAll();

        assertEquals(1, usuarios.size());
        assertEquals("Luis", usuarios.get(0).getNombre());
        assertEquals("Admin", usuarios.get(0).getRol().getNombre());
    }
}
