import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto

  constructor() { 


  }

  ngOnInit() {


  }

}
