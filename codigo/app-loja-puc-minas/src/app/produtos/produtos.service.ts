
import { Injectable} from "@angular/core";
import { Produto } from "app/model/produto.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {API_LOJA} from "../app.api";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ErrorHandler} from '../app.error-handler'




@Injectable()
export class ProdutosService {

    

    constructor (private http: Http){
        
    }

    
    getTodosProdutosNome(search: string = ""): Observable<Produto[]> {
        return this.http.get(`${API_LOJA}/produtos/`, {params: {q: search}})
        .map(response => response.json())
    }

    getTodosProdutos():  Observable<Produto []> {
       
        return this.http.get(`${API_LOJA}/produtos`)
           .map(response => response.json())
           .catch(ErrorHandler.handlerError)
    }

   
    avaliacoesDosprodutos(id: string): Observable<Produto>{

      
        return this.http.get(`${API_LOJA}/produtos/${id}/avaliacoes`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
        
    }

    getProdutoPorId(id: Number):  Observable<Produto> {
        return this.http.get(`${API_LOJA}/produtos/${id}`)
        .map(response => response.json())
        ._catch(ErrorHandler.handlerError);
    }


}