package snp.sipeip.sipeip2.repository;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import snp.sipeip.sipeip2.model.Objetivos.*;
import snp.sipeip.sipeip2.repository.Objetivos.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class ObjetivoEstrategicoRepositoryTest {

    @Autowired
    private ObjetivoEstrategicoRepository objetivoEstrategicoRepository;

    @Autowired
    private ObjetivoPlanNacionalDesarrolloRepository pndRepository;

    @Autowired
    private ObjetivoDesarrolloSostenibleRepository odsRepository;

    @Test
    public void testGuardarYListarObjetivoEstrategico() {
        ObjetivoPlanNacionalDesarrollo pnd = ObjetivoPlanNacionalDesarrollo.builder()
                .codigo("PND1")
                .nombre("Erradicar la pobreza")
                .descripcion("Eliminar la pobreza extrema para 2030")
                .anio(2030)
                .build();
        pnd = pndRepository.save(pnd);

        ObjetivoDesarrolloSostenible ods = ObjetivoDesarrolloSostenible.builder()
                .codigo("ODS1")
                .nombre("Fin de la pobreza")
                .descripcion("Erradicar la pobreza en todas sus formas")
                .anio(2030)
                .build();
        ods = odsRepository.save(ods);

        ObjetivoEstrategico objetivo = ObjetivoEstrategico.builder()
                .nombre("Reducir pobreza urbana")
                .descripcion("Mejorar las condiciones de vida en ciudades")
                .objetivoPnd(pnd)
                .ObjetivoOds(ods)
                .build();
        objetivoEstrategicoRepository.save(objetivo);

        List<ObjetivoEstrategico> resultados = objetivoEstrategicoRepository.findAll();
        assertEquals(1, resultados.size());

        ObjetivoEstrategico recuperado = resultados.get(0);
        assertEquals("Reducir pobreza urbana", recuperado.getNombre());
        assertEquals("PND1", recuperado.getObjetivoPnd().getCodigo());
        assertEquals("ODS1", recuperado.getObjetivoOds().getCodigo());
    }
}