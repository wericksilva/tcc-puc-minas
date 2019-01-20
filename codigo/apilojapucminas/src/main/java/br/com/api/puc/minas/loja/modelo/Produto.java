package br.com.api.puc.minas.loja.modelo;

public class Produto {

	private Long id;
	private String nome;
	private String categoria;
	private String imagePath;
	
	
	
	public Produto() {
		
	}
	
	
	public Produto(Long id, String nome, String categoria, String imagePath) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.imagePath = imagePath;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	
}
