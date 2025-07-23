package snp.sipeip.sipeip2.model.Meta;
import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Plan.PlanInstitucional;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Meta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMeta;

    private String descripcion;
    private Integer estado;

    private String unidadMedida;
    private String valorInicial;
    private String valorObjetivo;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    @ManyToOne
    @JoinColumn(name = "id_plan_institucional")
    private PlanInstitucional planInstitucional;

    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    private ProyectoInversion proyecto;

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