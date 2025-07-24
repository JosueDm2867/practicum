package snp.sipeip.sipeip2.service.Proyecto;

import lombok.RequiredArgsConstructor;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import snp.sipeip.sipeip2.dto.ReporteProyectoDTO;
import snp.sipeip.sipeip2.model.Proyecto.ProyectoInversion;
import snp.sipeip.sipeip2.repository.Proyecto.ProyectoInversionRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProyectoInversionServiceImpl implements ProyectoInversionService {

    private final ProyectoInversionRepository proyectoRepository;

    @Override
    public ProyectoInversion guardar(ProyectoInversion proyecto) {
        return proyectoRepository.save(proyecto);
    }

    @Override
    public List<ProyectoInversion> listar() {
        return proyectoRepository.findAll();
    }

    @Override
    public Optional<ProyectoInversion> obtenerPorId(Long id) {
        return proyectoRepository.findById(id);
    }

    @Override
    public ProyectoInversion actualizar(Long id, ProyectoInversion proyecto) {
        proyecto.setIdProyecto(id);
        return proyectoRepository.save(proyecto);
    }

    @Override
    public void eliminar(Long id) {
        proyectoRepository.deleteById(id);
    }
}
