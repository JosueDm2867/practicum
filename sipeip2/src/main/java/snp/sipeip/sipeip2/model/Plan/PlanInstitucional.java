package snp.sipeip.sipeip2.model.Plan;


import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.model.Meta.Meta;
import snp.sipeip.sipeip2.model.Entidad.Entidad;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlanInstitucional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlanInstitucional;

    private String nombrePlan;
    private String descripcion;
    private int estado;

    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "idEntidad")
    private Entidad entidad;

    @ManyToOne
    @JoinColumn(name = "idResponsable")
    private Usuario responsable;

    @ManyToMany
    @JoinTable(
        name = "plan_usuario",
        joinColumns = @JoinColumn(name = "idPlanInstitucional"),
        inverseJoinColumns = @JoinColumn(name = "idUsuario")
    )
    private List<Usuario> usuarios;

    @OneToMany(mappedBy = "planInstitucional", cascade = CascadeType.ALL)
    private List<Meta> metas;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    @PrePersist
    public void prePersist() {
        this.fechaCreacion = LocalDateTime.now();
        this.fechaActualizacion = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.fechaActualizacion = LocalDateTime.now();
    }
}
