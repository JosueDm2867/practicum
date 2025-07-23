package snp.sipeip.sipeip2.model.Programa;

import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Entidad.Entidad;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Programa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPrograma;

    private String nombrePrograma;
    private String descripcion;
    private int estadoPrograma;

    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "id_entidad")
    private Entidad entidad;

    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    private ProyectoInversion proyecto;

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
