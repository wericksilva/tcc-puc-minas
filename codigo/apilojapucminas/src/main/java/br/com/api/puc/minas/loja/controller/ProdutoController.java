package br.com.api.puc.minas.loja.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.puc.minas.loja.email.EnvioEmail;
import br.com.api.puc.minas.loja.modelo.Produto;
import br.com.api.puc.minas.loja.service.ProdutoService;


@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {
	
	
	@Autowired
	EnvioEmail envioEmail;
	
	@Autowired
	ProdutoService produtoService;
	
	@GetMapping
	@ResponseBody
	public ResponseEntity<List<Produto>> listar() {
		return new ResponseEntity<>(produtoService.buscarTodos(), HttpStatus.OK);
	}
/*
	// End points
	@PostMapping
	@ResponseBody
	public ResponseEntity<Paciente> adicionar(@Valid @RequestBody Paciente paciente) {
		
		Paciente pacienteIncluido  =  pacienteService.salvar(paciente);
		
		 return new ResponseEntity<Paciente>(pacienteIncluido, HttpStatus.OK);
		
	}
	*/
	@GetMapping("/{id}")
	public ResponseEntity<Produto> buscar(@PathVariable Long id) {
		Produto Produto = produtoService.buscarPoId(id);
		
		if (Produto == null) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(Produto);
	}
	/*
	@PutMapping("/{id}")
	public ResponseEntity<Paciente> atualizar(@PathVariable Long id, 
			@Valid @RequestBody Paciente paciente) {
		Paciente existente = pacienteService.buscarPoId(id);
		
		if (existente == null) {
			return ResponseEntity.notFound().build();
		}
		
		BeanUtils.copyProperties(paciente, existente, "id");
		
		existente = pacienteService.salvar(existente);
		
		return ResponseEntity.ok(existente);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		Paciente paciente = pacienteService.buscarPoId(id);
		
		if (paciente == null) {
			return ResponseEntity.notFound().build();
		}
		
		pacienteService.excluir(paciente);
		
		return ResponseEntity.noContent().build();
	}
	
	*/
}
