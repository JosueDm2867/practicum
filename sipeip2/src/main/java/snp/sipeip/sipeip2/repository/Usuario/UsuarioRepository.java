package snp.sipeip.sipeip2.repository.Usuario;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import snp.sipeip.sipeip2.dto.ReporteUsuarioDTO;
import snp.sipeip.sipeip2.model.Usuario.Usuario;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByCorreo(String correo);
    @Query("SELECT new snp.sipeip.sipeip2.dto.ReporteUsuarioDTO(u.rol.nombre, u.estado, COUNT(u)) " +
        "FROM Usuario u GROUP BY u.rol.nombre, u.estado")
    List<ReporteUsuarioDTO> reporteUsuariosPorRolYEstado();

}