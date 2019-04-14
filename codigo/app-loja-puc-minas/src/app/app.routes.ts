import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { DescricaoComponent } from './produto-detalhe/descricao/descricao.component';
import { AvaliacaoComponent } from './produto-detalhe/avaliacao/avaliacao.component';
import { CarrinhoComponent } from './produto-detalhe/carrinho/carrinho.component';


export const ROUTES : Routes = [

    {path: '', component: HomeComponent},
    {path:  'about', component: AboutComponent},
    {path:  'carrinho', component: CarrinhoComponent},
    {path:  'produtos', component: ProdutosComponent},
    {path:  'produtos/:nome', component: ProdutosComponent},
    {path:  'produto/:id', component: ProdutoDetalheComponent,

    
    children: [
       // {path: '', redirectTo: 'descricao', pathMatch: 'full'},
        {path: 'descricao', component: DescricaoComponent},
        {path: 'avaliacao', component: AvaliacaoComponent}
    ]    
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
  })

export class AppRoutingModule {

}
