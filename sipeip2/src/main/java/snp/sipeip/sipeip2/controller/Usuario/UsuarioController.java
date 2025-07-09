package snp.sipeip.sipeip2.controller.Usuario;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.service.Usuario.UsuarioService;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listarTodos();
    }
    @GetMapping("/{id}")
    public Usuario obtener(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    @PostMapping
    public Usuario guardar(@RequestBody Usuario usuario) {
        if (usuario.getId() != null) {
            Usuario existente = usuarioService.buscarPorId(usuario.getId());
            if (existente != null) {
                usuario.setFechaCreacion(existente.getFechaCreacion());
            }
        } else {
            usuario.setFechaCreacion(LocalDateTime.now());
        }
        usuario.setFechaActualizacion(LocalDateTime.now());
        return usuarioService.guardar(usuario);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        usuarioService.eliminar(id);
    }


}
