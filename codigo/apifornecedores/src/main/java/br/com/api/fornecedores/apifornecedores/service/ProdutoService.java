package br.com.api.fornecedores.apifornecedores.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.fornecedores.apifornecedores.model.Produto;
import br.com.api.fornecedores.apifornecedores.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	
	public List<Produto> buscarTodos() {
		
		return produtoRepository.findAll();
	}

	
	public Produto buscarPoId(Long id) {
		return produtoRepository.findById(id).orElse(null);
	}
	
	public void excluir(Produto produto){
		produtoRepository.delete(produto);
	}

}
