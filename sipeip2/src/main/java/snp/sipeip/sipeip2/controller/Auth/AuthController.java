package snp.sipeip.sipeip2.controller.Auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.model.Auth.AuthRequest;
import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.repository.Usuario.UsuarioRepository;
import snp.sipeip.sipeip2.config.JwtUtil;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Usuario usuario = usuarioRepository.findByCorreo(request.getCorreo())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!usuario.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
        if (!usuario.isEnabled()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario inactivo");
        }
        String token = jwtUtil.generateToken(usuario.getCorreo(), usuario.getRol().getNombre());
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }
}

