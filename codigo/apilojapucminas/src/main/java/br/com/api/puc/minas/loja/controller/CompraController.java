package br.com.api.puc.minas.loja.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.puc.minas.loja.modelo.Compras;
import br.com.api.puc.minas.loja.service.ComprasService;

@RestController
@RequestMapping("/compras")
@CrossOrigin(origins = "*")
public class CompraController {

	@Autowired
	ComprasService comprasService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Compras> buscar(@PathVariable Long id) {
		
		Compras compras = comprasService.buscarPoId(id);
		
		if (compras == null) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(compras);
		
	}
	
	@GetMapping
	public ResponseEntity<List<Compras>> listar() {
		
		return new ResponseEntity<>(comprasService.buscarTodos(), HttpStatus.OK);
		
	}
	
	
	
}
