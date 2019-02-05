import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutosService } from './produtos/produtos.service';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { CarrinhoComponent } from './produto-detalhe/carrinho/carrinho.component';
import { AvaliacaoComponent } from './produto-detalhe/avaliacao/avaliacao.component';
import { DescricaoComponent } from './produto-detalhe/descricao/descricao.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ProdutosComponent,
    ProdutoComponent,
    ProdutoDetalheComponent,
    CarrinhoComponent,
    AvaliacaoComponent,
    DescricaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
