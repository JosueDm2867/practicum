package snp.sipeip.sipeip2.service.Usuario;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.repository.Usuario.UsuarioRepository;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        usuarioRepository.deleteById(id);
    }

    
}
