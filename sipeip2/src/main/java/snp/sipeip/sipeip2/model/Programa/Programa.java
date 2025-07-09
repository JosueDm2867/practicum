package snp.sipeip.sipeip2.model.Programa;


import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Entidad.Entidad;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

import java.time.LocalDate;

@Entity
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

    private Integer estadoPrograma;

    private LocalDate fechaInicio;

    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "id_entidad")
    private Entidad entidad;

    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    private ProyectoInversion proyecto;
} 
