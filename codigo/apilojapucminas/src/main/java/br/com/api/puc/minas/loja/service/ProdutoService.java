package br.com.api.puc.minas.loja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.puc.minas.loja.modelo.Produto;
import br.com.api.puc.minas.loja.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	
	public List<Produto> buscarTodos() {
		
		return produtoRepository.findAll();
	}
	
	public List<Produto> buscarTodosQuery(String query) {
		return produtoRepository.findByNomeContaining(query);
}

	
	public Produto buscarPoId(Long id) {
		return produtoRepository.findById(id).orElse(null);
	}
	
	public void excluir(Produto produto){
		produtoRepository.delete(produto);
	}

}
