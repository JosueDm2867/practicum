package snp.sipeip.sipeip2.controller.Reporte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import snp.sipeip.sipeip2.service.Reporte.ReporteUsuarioService;

import java.io.ByteArrayInputStream;

@RestController
@RequestMapping("/api/reportes/usuarios")
public class ReporteUsuarioController {

    @Autowired
    private ReporteUsuarioService reporteUsuarioService;

    @GetMapping("/pdf")
    public ResponseEntity<byte[]> descargarReporteUsuarios() {
        ByteArrayInputStream bis = reporteUsuarioService.generarReporte();
        byte[] pdfBytes = bis.readAllBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=usuarios.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }
}