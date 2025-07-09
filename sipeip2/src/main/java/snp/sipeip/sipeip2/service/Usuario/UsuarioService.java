package snp.sipeip.sipeip2.service.Usuario;


import java.util.List;

import snp.sipeip.sipeip2.model.Usuario.Usuario;

public interface UsuarioService {
    List<Usuario> listarTodos();
    Usuario guardar(Usuario usuario);
    Usuario buscarPorId(Long id);
    void eliminar(Long id);
}
