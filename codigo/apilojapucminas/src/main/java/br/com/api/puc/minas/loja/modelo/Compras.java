package br.com.api.puc.minas.loja.modelo;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
public class Compras {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Temporal(TemporalType.DATE)
	private Date data;
	
	private Double valor;
	
	@JsonInclude(JsonInclude.Include.NON_EMPTY)
	@OneToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	private StatusCompra statusCompra;
	
	@JsonBackReference
	@ManyToOne
	private Usuario usuario;
	
	@ManyToMany
	private List<Produto> produtos;

	
	
	
	public List<Produto> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public StatusCompra getStatusCompra() {
		return statusCompra;
	}

	public void setStatusCompra(StatusCompra statusCompra) {
		this.statusCompra = statusCompra;
	}
	
	
	
}
