package snp.sipeip.sipeip2;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import snp.sipeip.sipeip2.model.Rol.Rol;
import snp.sipeip.sipeip2.repository.Rol.RolRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class RolRepositoryTest {

    @Autowired
    private RolRepository rolRepository;

    @Test
    public void testGuardarYObtenerRol() {
        Rol rol = new Rol(null, "Supervisor", "Rol de supervisión", "ACTIVO");
        Rol guardado = rolRepository.save(rol);

        Optional<Rol> encontrado = rolRepository.findById(guardado.getIdRol());

        assertTrue(encontrado.isPresent());
        assertEquals("Supervisor", encontrado.get().getNombre());
    }
}