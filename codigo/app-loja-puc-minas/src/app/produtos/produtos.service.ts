
import { Injectable } from "@angular/core";
import { Produto } from "app/model/produto.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {VENDAS_PUC_API} from "../app.api";
import 'rxjs/add/operator/map';



@Injectable()
export class ProdutosService {

    

    constructor (private http: Http){
        
    }

     
    getTodosProdutos():  Observable<Produto []> {
        return this.http.get(`${VENDAS_PUC_API}/produtos`)
           .map(response => response.json());
       }

   
    


}