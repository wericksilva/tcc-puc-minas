import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'app/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-descricao',
  templateUrl: './descricao.component.html'
})
export class DescricaoComponent implements OnInit {

  produto: Produto

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute,) { }

  ngOnInit() {

   
    var sub = this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
    });
    this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
    .subscribe(produto => this.produto = produto)
    
  }

}
