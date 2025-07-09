package snp.sipeip.sipeip2.model.Presupuesto;


import jakarta.persistence.*;
import lombok.*;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.model.UnidadOrganizacional.UnidadOrganizacional;

import java.time.LocalDate;

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

    private LocalDate periodo;

    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    private ProyectoInversion proyecto;

    @ManyToOne
    @JoinColumn(name = "id_unidad")
    private UnidadOrganizacional unidad;
}
