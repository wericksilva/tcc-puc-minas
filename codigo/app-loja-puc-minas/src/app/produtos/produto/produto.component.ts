import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { CarrinhoService } from 'app/produto-detalhe/carrinho/carrinho-service';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto
  

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private carrinhoService : CarrinhoService) { 


  }

  ngOnInit() {
    
    this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
    .subscribe(produto => this.produto = produto)

  }

  adicionarItem(produto: Produto){

    this.carrinhoService.adicionarItem(produto);
  }
}
