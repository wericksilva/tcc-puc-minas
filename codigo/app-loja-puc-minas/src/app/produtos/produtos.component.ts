import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {


  produtos: Produto[] = [

    {
      id: "bread-bakery",
      nome: "Bread & Bakery",
      categoria: "Bakery",
      imagePath: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "burger-house",
      nome: "Burger House",
      categoria: "Hamburgers",
      imagePath: "assets/img/restaurants/burgerhouse.png"
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
