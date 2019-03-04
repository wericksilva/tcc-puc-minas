import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho-service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService : CarrinhoService) { }

  ngOnInit() {

  }

  items() : any[]{
    return this.carrinhoService.items;
  }

  limpar(){
    this.carrinhoService.limpar();
  }

  total(): number {
    
    return this.carrinhoService.total();
  }

  removerItem(item : any){
    this.carrinhoService.removerItem(item);
  }

  adicionarItem(item: any){
    this.carrinhoService.adicionarItem(item);
  }

  somarQuantidade(item: any){
    this.carrinhoService.somarQuantidade(item);
  }

  diminuirQuantidade(item: any){
    this.carrinhoService.diminuirQuantidade(item);
  }


}
