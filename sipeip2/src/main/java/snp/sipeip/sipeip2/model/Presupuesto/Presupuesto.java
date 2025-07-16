package snp.sipeip.sipeip2.model.Presupuesto;


import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Presupuesto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPresupuesto;

    private Integer monto;

    private String descripcion;

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
    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    private ProyectoInversion proyecto;

    @ManyToOne
    @JoinColumn(name = "id_unidad")
    private UnidadOrganizacional unidad;
}
