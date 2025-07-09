package snp.sipeip.sipeip2.service.UnidadOrganizacional;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;
import snp.sipeip.sipeip2.repository.UnidadOrganizacional.UnidadOrganizacionalRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UnidadOrganizacionalServiceImpl implements UnidadOrganizacionalService {

    private final UnidadOrganizacionalRepository repository;

    @Override
    public List<UnidadOrganizacional> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<UnidadOrganizacional> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public UnidadOrganizacional guardar(UnidadOrganizacional unidad) {
        if (unidad.getIdUnidadOrganizacional() == null) {
            unidad.setFechaCreacion(LocalDateTime.now());
        }
        unidad.setFechaActualizacion(LocalDateTime.now());
        return repository.save(unidad);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
