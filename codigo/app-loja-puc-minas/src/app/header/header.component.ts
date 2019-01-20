import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  
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

  
  @Input() texto: String
  

  constructor() { }

  ngOnInit() {

    
  }

}
