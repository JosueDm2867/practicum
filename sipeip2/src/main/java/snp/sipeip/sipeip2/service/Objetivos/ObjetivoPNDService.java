package snp.sipeip.sipeip2.service.Objetivos;

import snp.sipeip.sipeip2.model.Objetivos.ObjetivoPlanNacionalDesarrollo;
import java.util.List;
import java.util.Optional;

public interface ObjetivoPNDService {
    ObjetivoPlanNacionalDesarrollo guardar(ObjetivoPlanNacionalDesarrollo objetivo);
    List<ObjetivoPlanNacionalDesarrollo> listar();
    Optional<ObjetivoPlanNacionalDesarrollo> obtenerPorId(Long id);
    void eliminar(Long id);
}
