package snp.sipeip.sipeip2.model.Usuario;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import snp.sipeip.sipeip2.model.Rol.Rol;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;

    @Column(unique = true, nullable = false)
    private String cedula;

    @Column(unique = true, nullable = false)
    private String correo;

    @Column(nullable = false)
    private String password;

    private String estado;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_rol", nullable = false)
    private Rol rol;

    @PrePersist
    public void prePersist() {
        this.fechaCreacion = LocalDateTime.now();
        this.fechaActualizacion = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.fechaActualizacion = LocalDateTime.now();
    }

    // Implementación de UserDetails
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(() -> rol.getNombre()); // usa el nombre del rol como autoridad
    }

    @Override
    public String getUsername() {
        return correo; // usamos correo como username
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // puedes agregar lógica según estado
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // o lógica personalizada
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return estado != null && estado.equalsIgnoreCase("activo");
    }
}
