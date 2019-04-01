package br.com.api.puc.minas.loja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.puc.minas.loja.modelo.Usuario;
import br.com.api.puc.minas.loja.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	public List<Usuario> buscarTodos() {
		
		return usuarioRepository.findAll();
	}

	
	public Usuario buscarPoId(Long id) {
		return usuarioRepository.findById(id).orElse(null);
	}
	
}
