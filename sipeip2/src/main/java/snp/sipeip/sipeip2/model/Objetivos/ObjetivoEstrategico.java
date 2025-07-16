package snp.sipeip.sipeip2.model.Objetivos;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ObjetivoEstrategico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idObjetivo;

    private String nombre;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "idPnd")
    private ObjetivoPlanNacionalDesarrollo objetivoPnd;

    @ManyToOne
    @JoinColumn(name = "idOds")
    private ObjetivoDesarrolloSostenible ObjetivoOds;
}
