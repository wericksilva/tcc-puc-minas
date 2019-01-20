import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


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
