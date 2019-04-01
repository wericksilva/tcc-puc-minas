import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'app/model/produto.model';
import { CarrinhoService } from 'app/produto-detalhe/carrinho/carrinho-service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProdutosService } from 'app/produtos/produtos.service';
import 'rxjs/add/operator/switchMap'
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Component({

  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() texto: String

  jobs: Produto[] = []

  quantidadeItensCarrinho: number;

  searchForm: FormGroup
  searchControl: FormControl
  constructor(private carrinhoService: CarrinhoService,
    private fb: FormBuilder, private route: ActivatedRoute ,
    private produtosService: ProdutosService, private router: Router) { }

  totalCarrinho(): number {
    return this.carrinhoService.items.length;


  }

  ngOnInit() {

    this.searchControl = this.fb.control('')

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.quantidadeItensCarrinho = this.carrinhoService.items.length;

  }

  pesquisar() {
  
   
 
    // {skipLocationChange: true}
    
    this.router.navigate(['/produtos'], { queryParams: { q: this.searchForm.controls.searchControl.value }} );
    
  }

}
