package snp.sipeip.sipeip2.repository;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import snp.sipeip.sipeip2.model.Entidad.Entidad;
import snp.sipeip.sipeip2.repository.Entidad.EntidadRepository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class EntidadRepositoryTest {

    @Autowired
    private EntidadRepository entidadRepository;

    @Test
    public void testGuardarYListarEntidad() {
        Entidad entidad = new Entidad();
        entidad.setCodigo("E001");
        entidad.setNombre("Ministerio de Educación");
        entidad.setSubsector("Educación");
        entidad.setNivelGobierno("Nacional");
        entidad.setEstado("ACTIVO");

        entidadRepository.save(entidad);

        List<Entidad> entidades = entidadRepository.findAll();

        assertEquals(1, entidades.size());
        Entidad resultado = entidades.get(0);
        assertEquals("E001", resultado.getCodigo());
        assertEquals("Ministerio de Educación", resultado.getNombre());
        assertEquals("Educación", resultado.getSubsector());
        assertNotNull(resultado.getFechaCreacion());
        assertNotNull(resultado.getFechaActualizacion());
    }
}