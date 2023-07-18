package br.com.api.puc.minas.loja.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping(params = "q")
	public ResponseEntity<List<Produto>> listar(@RequestParam("q") String query) {
		
		if(query.equals("")) {
			return new ResponseEntity<>(produtoService.buscarTodos(), HttpStatus.OK);
		}
		
		return new ResponseEntity<>(produtoService.buscarTodosQuery(query), HttpStatus.OK);
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
	
	@GetMapping
	public ResponseEntity<List<Produto>> buscarTodos () {
		return ResponseEntity.ok(produtoService.buscarTodos());
	}
	
	@PutMapping("/atualizar/{id}")
	public ResponseEntity<Produto> atualizar(@PathVariable Long id) {
		Produto existente = produtoService.buscarPoId(id);
		
		if (existente == null) {
			return ResponseEntity.notFound().build();
		}
		
		existente.setAtivo(true);
		existente = produtoService.salvar(existente);
		
		return ResponseEntity.ok(existente);
	}

	
}
