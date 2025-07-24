package snp.sipeip.sipeip2.service.Reporte;

import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snp.sipeip.sipeip2.model.Usuario.Usuario;
import snp.sipeip.sipeip2.repository.Usuario.UsuarioRepository;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class ReporteUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public ByteArrayInputStream generarReporte() {
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            Document document = new Document();
            PdfWriter.getInstance(document, out);
            document.open();

            // Título
            Font titleFont = new Font(Font.HELVETICA, 16, Font.BOLD);
            Paragraph title = new Paragraph("REPORTE DE USUARIOS", titleFont);
            title.setAlignment(Paragraph.ALIGN_CENTER);
            document.add(title);

            document.add(new Paragraph(" ")); // Espaciado

            // Tabla con encabezados
            PdfPTable table = new PdfPTable(5);
            table.setWidthPercentage(100);
            table.setWidths(new int[]{2, 2, 3, 2, 2});

            table.addCell("Nombre");
            table.addCell("Apellido");
            table.addCell("Correo");
            table.addCell("Cédula");
            table.addCell("Rol");

            List<Usuario> usuarios = usuarioRepository.findAll();
            for (Usuario usuario : usuarios) {
                table.addCell(usuario.getNombre());
                table.addCell(usuario.getApellido());
                table.addCell(usuario.getCorreo());
                table.addCell(usuario.getCedula());
                table.addCell(usuario.getRol() != null ? usuario.getRol().getNombre() : "Sin rol");
            }

            document.add(table);
            document.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}