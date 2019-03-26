package br.com.api.puc.minas.loja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.puc.minas.loja.modelo.Compras;
import br.com.api.puc.minas.loja.repository.ComprasRepository;

@Service
public class ComprasService {
	
	@Autowired
	ComprasRepository comprasRepository;
	
	
	public List<Compras> buscarTodos() {
		
		return comprasRepository.findAll();
	}

	
	public Compras salvar(Compras compra){
		
		Compras compraIncluida = comprasRepository.saveAndFlush(compra);
		
		
		
		return compraIncluida;
	}
	
	
	public Compras buscarPoId(Long id) {
		return comprasRepository.findById(id).orElse(null);
	}
	
	
	
}
