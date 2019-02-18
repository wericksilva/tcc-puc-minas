import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'app/produtos/produtos.service';

@Component({
  selector: 'mt-produto-detalhe',
  templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto
  
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
    .subscribe(produto => this.produto = produto)

  }
    
}
