package br.com.api.puc.minas.loja.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.puc.minas.loja.modelo.StatusCompra;

@Repository
public interface StatusCompraRepository extends JpaRepository<StatusCompra, Long> {

}
