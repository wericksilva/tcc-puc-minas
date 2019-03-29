package br.com.api.puc.minas.loja.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.puc.minas.loja.modelo.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	

}
