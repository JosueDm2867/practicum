package snp.sipeip.sipeip2.service.UnidadOrganizacional;

import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;

import java.util.List;
import java.util.Optional;

public interface UnidadOrganizacionalService {
    List<UnidadOrganizacional> listar();
    Optional<UnidadOrganizacional> buscarPorId(Long id);
    UnidadOrganizacional guardar(UnidadOrganizacional unidad);
    void eliminar(Long id);
}
