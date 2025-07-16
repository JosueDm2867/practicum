package snp.sipeip.sipeip2.service.Objetivos;

import snp.sipeip.sipeip2.model.Objetivos.ObjetivoEstrategico;

import java.util.List;
import java.util.Optional;

public interface ObjetivoEstrategicoService {

    ObjetivoEstrategico guardar(ObjetivoEstrategico objetivo);

    List<ObjetivoEstrategico> listar(); 

    Optional<ObjetivoEstrategico> obtenerPorId(Long id);

    ObjetivoEstrategico actualizar(Long id, ObjetivoEstrategico objetivo);

    void eliminar(Long id);
}
