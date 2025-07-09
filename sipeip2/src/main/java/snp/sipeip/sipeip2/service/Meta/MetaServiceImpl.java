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

    private final MetaRepository metaRepository;

    @Override
    public Meta guardar(Meta meta) {
        return metaRepository.save(meta);
    }

    @Override
    public List<Meta> listar() {
        return metaRepository.findAll();
    }

    @Override
    public Optional<Meta> obtenerPorId(Long id) {
        return metaRepository.findById(id);
    }

    @Override
    public Meta actualizar(Long id, Meta meta) {
        meta.setIdMeta(id);
        return metaRepository.save(meta);
    }

    @Override
    public void eliminar(Long id) {
        metaRepository.deleteById(id);
    }
}
