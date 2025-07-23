package snp.sipeip.sipeip2.model.ActividadOperativa;

import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Meta.Meta;
import snp.sipeip.sipeip2.model.Presupuesto.Presupuesto;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;
import snp.sipeip.sipeip2.model.Usuario.Usuario;

import java.time.LocalDate;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ActividadOperativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idActividad;

    private String descripcion;

    private LocalDate fecha;

    @ManyToOne
    @JoinColumn(name = "id_meta")
    private Meta meta;

    @ManyToOne
    @JoinColumn(name = "id_presupuesto")
    private Presupuesto presupuesto;

    @ManyToOne
    @JoinColumn(name = "id_unidad")
    private UnidadOrganizacional unidad;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}
