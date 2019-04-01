import { Component, OnInit,Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ProdutosService } from 'app/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'app/produto-detalhe/carrinho/carrinho-service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  produtos: Produto[]
  
  @Input() produto: Produto
  
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private carrinhoService : CarrinhoService) { }

  ngOnInit() {
    
    this.produtosService.getTodosProdutosNome().subscribe(produtos => this.produtos  = produtos);
    console.log(this.produtos);
  }

  adicionarItem(produto: Produto){

    this.carrinhoService.adicionarItem(produto);
  }
}
