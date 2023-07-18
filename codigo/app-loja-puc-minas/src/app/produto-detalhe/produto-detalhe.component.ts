import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'app/produtos/produtos.service';
import { CarrinhoService } from './carrinho/carrinho-service';

@Component({
  selector: 'mt-produto-detalhe',
  templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto
  
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private carrinhoService : CarrinhoService) { }

  ngOnInit() {

    
    this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
    .subscribe(produto => this.produto = produto)
    
    console.log(this.produto);
  }
    

  adicionarItem(produto: Produto){

    this.carrinhoService.adicionarItem(this.produto);
  }


}
