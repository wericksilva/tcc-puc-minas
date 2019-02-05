import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'app/produtos/produtos.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html'
})
export class AvaliacaoComponent implements OnInit {

  avaliacoes: Observable<any>

  constructor(private produtoService: ProdutosService,
     private route: ActivatedRoute) { }

  ngOnInit() {
 //  this.avaliacoes = this.produtoService
  //  .avaliacoesDosprodutos(this.route.parent.snapshot.params['id'])
  }

}
