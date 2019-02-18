import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { ProdutosService } from 'app/produtos/produtos.service';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  produtos: Produto[]
  
  
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {

    this.produtosService.getTodosProdutos().subscribe(produtos => this.produtos  = produtos);
    
  }

}
