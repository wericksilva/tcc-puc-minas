import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';


export const ROUTES : Routes = [

    {path: '', component: HomeComponent},
    {path:  'about', component: AboutComponent},
    {path:  'produtos', component: ProdutosComponent},
    {path:  'produtos/:id', component: ProdutoDetalheComponent}
    
]


