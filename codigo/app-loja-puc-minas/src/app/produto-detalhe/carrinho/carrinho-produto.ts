import { Produto } from "app/model/produto.model";

export class CarrinhoProduto {

    constructor(public produto: Produto, public quantidade: number = 1){

    }

    value() :number{
        return this.produto.preco  *  this.quantidade
    }

}