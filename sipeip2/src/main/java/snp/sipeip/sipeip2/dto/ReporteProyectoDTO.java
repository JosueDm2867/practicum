package snp.sipeip.sipeip2.dto;


import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReporteProyectoDTO {
    private Long idProyecto;
    private String nombreProyecto;
    private String entidad;
    private String unidadOrganizacional;
    private String responsable;
    private String estado;
    private Double presupuesto;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
}
