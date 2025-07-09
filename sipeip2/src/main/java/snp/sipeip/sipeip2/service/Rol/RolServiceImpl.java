package snp.sipeip.sipeip2.service.Rol;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Rol.Rol;
import snp.sipeip.sipeip2.repository.Rol.RolRepository;

import java.util.List;

@Service
public class RolServiceImpl implements RolService {

    @Autowired
    private RolRepository repository;

    @Override
    public List<Rol> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Rol guardar(Rol rol) {
        return repository.save(rol);
    }

    @Override
    public Rol obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
