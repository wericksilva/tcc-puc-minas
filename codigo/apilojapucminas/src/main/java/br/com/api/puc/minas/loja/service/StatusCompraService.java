package br.com.api.puc.minas.loja.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.puc.minas.loja.modelo.StatusCompra;
import br.com.api.puc.minas.loja.repository.StatusCompraRepository;

@Service
public class StatusCompraService {

	@Autowired
	StatusCompraRepository statusCompraRepository;
	
	public StatusCompra buscarPoId(Long id) {
		return statusCompraRepository.findById(id).orElse(null);
	}
}
