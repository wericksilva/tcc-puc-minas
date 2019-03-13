import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ProdutosService } from './produtos.service';



@Component({
  selector: 'mt-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {


  produtos: Produto[] 
  

  constructor(private produtosService: ProdutosService ) { 



  }

  ngOnInit() {
    this.produtosService.getTodosProdutos().subscribe(produtos => this.produtos  = produtos);    
  }

}
