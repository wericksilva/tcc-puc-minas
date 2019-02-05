package br.com.api.fornecedores.apifornecedores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.fornecedores.apifornecedores.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	

}
