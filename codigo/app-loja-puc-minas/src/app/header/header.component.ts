import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { CarrinhoService } from 'app/produto-detalhe/carrinho/carrinho-service';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() texto: String
  

  quantidadeItensCarrinho : number;

  constructor( private carrinhoService : CarrinhoService) { }

  totalCarrinho():number{
    return  this.carrinhoService.items.length;
  }

  ngOnInit() {

    this.quantidadeItensCarrinho =   this.carrinhoService.items.length;
    
  }

}
