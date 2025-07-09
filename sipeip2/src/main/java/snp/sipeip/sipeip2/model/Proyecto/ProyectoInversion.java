package snp.sipeip.sipeip2.model.Proyecto;

import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Entidad.Entidad;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProyectoInversion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProyecto;

    private String codigo;
    private String nombre;
    private String descripcion;

    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String estado;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    @ManyToOne
    @JoinColumn(name = "id_entidad")
    private Entidad entidad;

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
