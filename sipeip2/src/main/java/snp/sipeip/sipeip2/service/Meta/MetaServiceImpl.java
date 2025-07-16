package snp.sipeip.sipeip2.service.Meta;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Meta.Meta;
import snp.sipeip.sipeip2.repository.Meta.MetaRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MetaServiceImpl implements MetaService {

    private final MetaRepository repository;

    @Override
    public Meta guardar(Meta meta) {
        return repository.save(meta);
    }

    @Override
    public List<Meta> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<Meta> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Meta actualizar(Long id, Meta meta) {
        meta.setIdMeta(id);
        return repository.save(meta);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
