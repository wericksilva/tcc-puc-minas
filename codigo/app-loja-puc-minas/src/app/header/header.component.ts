import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() texto: String
  

  constructor() { }

  ngOnInit() {

    
  }

}
