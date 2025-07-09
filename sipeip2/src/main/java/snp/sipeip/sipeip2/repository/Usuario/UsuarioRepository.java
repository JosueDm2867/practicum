package snp.sipeip.sipeip2.repository.Usuario;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import snp.sipeip.sipeip2.model.Usuario.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByCedula(String cedula);
    boolean existsByCorreo(String correo);
    Optional<Usuario> findByCorreo(String correo); 

}
