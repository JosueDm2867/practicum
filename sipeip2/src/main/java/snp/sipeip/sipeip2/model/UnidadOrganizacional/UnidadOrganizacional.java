package snp.sipeip.sipeip2.model.UnidadOrganizacional;


import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

import snp.sipeip.sipeip2.model.Entidad.Entidad;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UnidadOrganizacional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUnidadOrganizacional;

    private String nombre;
    private String responsable;
    private String telefonoInterno;
    private String correo;
    private String estado; 

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    @ManyToOne
    @JoinColumn(name = "id_entidad", nullable = false)
    private Entidad entidad;
}
