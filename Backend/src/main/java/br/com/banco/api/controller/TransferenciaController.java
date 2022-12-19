package br.com.banco.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.banco.api.hypermedia.BancoLinks;
import br.com.banco.domain.filter.TransferenciaFiltro;
import br.com.banco.domain.model.Transferencia;
import br.com.banco.domain.repository.TransferenciaRepository;
import br.com.banco.infrastructure.repository.spec.TransferenciaSpecs;

@RestController
@RequestMapping(value = "/transferencias")
public class TransferenciaController {

	@Autowired
	private TransferenciaRepository transferenciaRepository;
	
	@Autowired
	private BancoLinks bancoLinks;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public TransferenciaModel transferencias() {
		var transferenciaModel = new TransferenciaModel();
		transferenciaModel.add(bancoLinks.linkToTransferencias("pesquisar"));
		return transferenciaModel;
	}
	
	@GetMapping(path = "/pesquisar", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Transferencia> pesquisar(TransferenciaFiltro filtro){
		return transferenciaRepository.findAll(TransferenciaSpecs.usandoFiltro(filtro));
	}
	
	public static class TransferenciaModel extends RepresentationModel<TransferenciaModel> {
	}
}
