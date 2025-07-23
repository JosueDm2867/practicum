package snp.sipeip.sipeip2.repository;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import snp.sipeip.sipeip2.model.Objetivos.ObjetivoDesarrolloSostenible;
import snp.sipeip.sipeip2.repository.Objetivos.ObjetivoDesarrolloSostenibleRepository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class ObjetivoDesarrolloSostenibleRepositoryTest {

    @Autowired
    private ObjetivoDesarrolloSostenibleRepository odsRepository;

    @Test
    public void testGuardarYListarObjetivosODS() {
        ObjetivoDesarrolloSostenible ods = ObjetivoDesarrolloSostenible.builder()
                .codigo("ODS4")
                .nombre("Educación de calidad")
                .descripcion("Garantizar una educación inclusiva, equitativa y de calidad")
                .anio(2030)
                .build();

        odsRepository.save(ods);

        List<ObjetivoDesarrolloSostenible> resultados = odsRepository.findAll();
        assertEquals(1, resultados.size());

        ObjetivoDesarrolloSostenible recuperado = resultados.get(0);
        assertEquals("ODS4", recuperado.getCodigo());
        assertEquals("Educación de calidad", recuperado.getNombre());
        assertEquals(2030, recuperado.getAnio());
    }
}