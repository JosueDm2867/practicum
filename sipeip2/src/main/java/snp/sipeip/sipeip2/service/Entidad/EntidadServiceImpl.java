package snp.sipeip.sipeip2.service.Entidad;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import snp.sipeip.sipeip2.model.Entidad.Entidad;

import snp.sipeip.sipeip2.repository.Entidad.EntidadRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EntidadServiceImpl implements EntidadService {

    @Autowired
    private EntidadRepository entidadRepository;

    @Override
    public List<Entidad> listarTodas() {
        return entidadRepository.findAll();
    }

    @Override
    public Entidad buscarPorId(Long id) {
        Optional<Entidad> opt = entidadRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public Entidad guardar(Entidad entidad) {
        return entidadRepository.save(entidad);
    }

    @Override
    public void eliminar(Long id) {
        entidadRepository.deleteById(id);
    }
}
