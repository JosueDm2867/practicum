package snp.sipeip.sipeip2.service.Usuario;


import java.util.List;

import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.dto.ReporteUsuarioDTO;

public interface UsuarioService {
    List<Usuario> listarTodos();
    Usuario guardar(Usuario usuario);
    Usuario buscarPorId(Long id);
    void eliminar(Long id);
    List<ReporteUsuarioDTO> obtenerReporteUsuariosPorRolYEstado();
}
