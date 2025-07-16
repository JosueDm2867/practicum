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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_entidad", nullable = false)
    private Entidad entidad;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_responsable", nullable = false)
    private Usuario responsable;

    @ManyToMany
    @JoinTable(
            name = "plan_usuario",
            joinColumns = @JoinColumn(name = "id_plan_institucional"),
            inverseJoinColumns = @JoinColumn(name = "id_usuario")
    )
    private List<Usuario> usuarios;

    @OneToMany(mappedBy = "planInstitucional", cascade = CascadeType.ALL, orphanRemoval = true)
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
