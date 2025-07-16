package snp.sipeip.sipeip2.model.Objetivos;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ObjetivoDesarrolloSostenible {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOds;

    private String codigo;
    private String nombre;
    private String descripcion;
    private int anio;
}
