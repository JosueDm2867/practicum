package snp.sipeip.sipeip2.repository.Proyecto;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

// import java.util.List;

// import snp.sipeip.sipeip2.dto.ReporteProyectoDTO;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;

public interface ProyectoInversionRepository extends JpaRepository<ProyectoInversion, Long> {

//     @Query("SELECT new snp.sipeip.sipeip2.dto.ReporteProyectoDTO(" +
//             "p.id, p.nombre, e.nombre, uo.nombre, " +
//             "CONCAT(responsable.nombre, ' ', responsable.apellido), " +
//             "p.estado, p.presupuestoTotal, p.fechaInicio, p.fechaFin) " +
//             "FROM ProyectoInversion p " +
//             "JOIN p.entidad e " +
//             "LEFT JOIN p.unidadOrganizacional uo " +
//             "LEFT JOIN p.responsable responsable " +
//             "WHERE (:entidadId IS NULL OR e.id = :entidadId) " +
//             "AND (:estado IS NULL OR p.estado = :estado) " +
//             "AND (:responsableId IS NULL OR responsable.id = :responsableId) " +
//             "ORDER BY p.fechaCreacion DESC"
//     )
//     List<ReporteProyectoDTO> obtenerReporteProyectos(
//         @Param("entidadId") Long entidadId,
//         @Param("estado") String estado,
//         @Param("responsableId") Long responsableId
//     );
}
