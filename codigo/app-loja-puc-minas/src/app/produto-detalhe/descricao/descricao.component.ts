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

  descricao: String

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute,) { }

  ngOnInit() {

   
    this.route.queryParams.subscribe(params => {
      console.log('PARAMETRO');
      console.log(params);

      if (params['descricao']) {
        this.descricao = params['descricao']
      }
    
    });
  }


}