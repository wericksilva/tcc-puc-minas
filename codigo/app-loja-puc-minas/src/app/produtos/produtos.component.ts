import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ProdutosService } from './produtos.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'mt-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {


  produtos: Produto[] 

  termoPesquisa: string = "";

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute ) { 


  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
     if (params['q']) {
        this.termoPesquisa = params['q'];
        this.produtosService.getTodosProdutosNome(this.termoPesquisa).
        subscribe(produtos => this.produtos  = produtos);    
      }
      else{
        this.produtosService.getTodosProdutosNome("").
        subscribe(produtos => this.produtos  = produtos);  
      }
    });

    
  }

}
