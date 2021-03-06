import { Produto } from "app/model/produto.model";
import { CarrinhoProduto } from "./carrinho-produto";

export class CarrinhoService {

    items: CarrinhoProduto [] = [];

    limpar(){
        this.items = [];
    }

    adicionarItem(produto: Produto){

        let idProduto = produto.id;
        let encontradoProduto = this.items.find(produto => produto.produto.id == idProduto);
        if(encontradoProduto){
            encontradoProduto.quantidade = encontradoProduto.quantidade + 1;
        }else{
            this.items.push(new CarrinhoProduto(produto))
        }


       

    }

    somarQuantidade(carrinhoProduto: CarrinhoProduto){
        let encontradoProduto = this.items.find((produto) => produto.produto.id === carrinhoProduto.produto.id);      
        if(encontradoProduto){
            encontradoProduto.quantidade = encontradoProduto.quantidade + 1;
        }
    }

    diminuirQuantidade(carrinhoProduto: CarrinhoProduto){
        let encontradoProduto = this.items.find((produto) => produto.produto.id === carrinhoProduto.produto.id);
        if(encontradoProduto){
            encontradoProduto.quantidade = encontradoProduto.quantidade - 1;
        }
    }

    

    removerItem(item: CarrinhoProduto){
        console.log(item);
        console.log(this.items);
        this.items.splice(this.items.indexOf(item),1);
    }



    total(): number {
        return this.items
        .map(produto => produto.value())
        .reduce((preco, value) => preco + value, 0)
    }



}