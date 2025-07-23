package snp.sipeip.sipeip2.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReporteUsuarioDTO {
    private String rol;
    private String estado;
    private Long cantidad;
}
