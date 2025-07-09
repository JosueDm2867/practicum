package snp.sipeip.sipeip2.service.Rol;


import snp.sipeip.sipeip2.model.Rol.Rol;

import java.util.List;

public interface RolService {
    List<Rol> listarTodos();
    Rol guardar(Rol rol);
    Rol obtenerPorId(Long id);
    void eliminar(Long id);
}
