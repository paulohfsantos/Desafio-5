package br.com.banco.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.banco.domain.filter.TransferenciaFiltro;
import br.com.banco.domain.model.Transferencia;
import br.com.banco.domain.repository.TransferenciaRepository;
import br.com.banco.infrastructure.repository.spec.TransferenciaSpecs;

@RestController
@RequestMapping(value = "/transferencias")
public class TransferenciaController {

	@Autowired
	private TransferenciaRepository transferenciaRepository;
	
	@GetMapping
	public List<Transferencia> pesquisar(TransferenciaFiltro filtro){
		return transferenciaRepository.findAll(TransferenciaSpecs.usandoFiltro(filtro));
	}
}
