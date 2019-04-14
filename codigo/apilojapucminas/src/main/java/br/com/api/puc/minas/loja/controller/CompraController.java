package br.com.api.puc.minas.loja.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.puc.minas.loja.email.EnvioEmail;
import br.com.api.puc.minas.loja.modelo.Compras;
import br.com.api.puc.minas.loja.modelo.Produto;
import br.com.api.puc.minas.loja.modelo.StatusCompra;
import br.com.api.puc.minas.loja.service.ComprasService;
import br.com.api.puc.minas.loja.service.StatusCompraService;

@RestController
@RequestMapping("/compras")
@CrossOrigin(origins = "*")
public class CompraController {

	@Autowired
	EnvioEmail envioEmail;

	@Autowired
	ComprasService comprasService;
	
	@Autowired
	StatusCompraService statusCompraService;

	@GetMapping("/{id}")
	public ResponseEntity<Compras> buscar(@PathVariable Long id) {

		Compras compras = comprasService.buscarPoId(id);

		if (compras == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(compras);

	}

	@PutMapping("/{id}")
	public ResponseEntity<Compras> atualizar(@PathVariable Long id, @Valid @RequestBody Compras compra) {
		Compras existente = comprasService.buscarPoId(id);

		if (existente == null) {
			return ResponseEntity.notFound().build();
		}

		existente.setData(compra.getData());
		
		StatusCompra statusCompra = new StatusCompra();
		StatusCompra statusCompraRecuperado = statusCompraService.buscarPoId(compra.getStatusCompra().getId());
		
		statusCompra.setId(statusCompraRecuperado.getId());
		statusCompra.setDescricao(statusCompraRecuperado.getDescricao());
		statusCompra.setNome(statusCompraRecuperado.getNome());
		
		existente.setStatusCompra(statusCompra);
		existente.setValor(compra.getValor());

		existente = comprasService.salvar(existente);

		String assunto = "Compra Puc Vendas";
		String mensagem = mensagemEmailStatusCompra(existente);
		
		envioEmail.enviar("werickzim@gmail.com", assunto, mensagem);

		return ResponseEntity.ok(existente);
	}


	private String mensagemEmailStatusCompra(Compras compras) {

		StringBuilder mensagem = new StringBuilder();
		StringBuilder produtos = new StringBuilder();
		
		mensagem.append("Sua compra foi Atualizada\n" + "valor: " + compras.getValor() + "\n");

		for (Produto produto : compras.getProdutos()) {
			String nome = "Nome: " + produto.getNome() + "  -  ";
			String valor = "Valor: " + produto.getPreco();
			produtos.append(nome).append(valor).append("\n");
		}

		mensagem.append("Produtos: \n" + produtos + "\n" + "Status da compra: " + compras.getStatusCompra().getNome()
				+ "\n Descricao: " + compras.getStatusCompra().getDescricao());

		return mensagem.toString();

	}

	@GetMapping
	public ResponseEntity<List<Compras>> listar() {

		return new ResponseEntity<>(comprasService.buscarTodos(), HttpStatus.OK);

	}

}
