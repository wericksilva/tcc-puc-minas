package br.com.api.puc.minas.loja.controller;

import java.util.ArrayList;
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

import br.com.api.puc.minas.loja.modelo.Compras;
import br.com.api.puc.minas.loja.modelo.Produto;
import br.com.api.puc.minas.loja.modelo.Usuario;
import br.com.api.puc.minas.loja.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> buscar(@PathVariable Long id) {
		
		Usuario usuario = usuarioService.buscarPoId(id);
		
		if (usuario == null) {
			return ResponseEntity.notFound().build();
		}
				
		return ResponseEntity.ok(usuario);
		
	}
	
	@GetMapping
	@ResponseBody
	public ResponseEntity<List<Usuario>> listar() {
		
		return new ResponseEntity<>(usuarioService.buscarTodos(), HttpStatus.OK);
		
	}
}
