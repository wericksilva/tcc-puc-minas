
import { Injectable} from "@angular/core";
import { Produto } from "app/model/produto.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {VENDAS_PUC_API} from "../app.api";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class ProdutosService {

    

    constructor (private http: Http){
        
    }

     
    getTodosProdutos():  Observable<Produto []> {
        return this.http.get(`${VENDAS_PUC_API}/produtos`)
           .map(response => response.json())
           .catch(ErrorHandler.handlerError)
    }

   
    avaliacoesDosprodutos(id: string): Observable<Produto>{
        return this.http.get(`${VENDAS_PUC_API}/produtos/${id}/avaliacoes`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }
    


}