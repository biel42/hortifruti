import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produtos[]
  produto: Produtos = new Produtos

  NomeProduto: string

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrarProduto() {
    this.produtosService.postProdutos(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      location.assign('/loja')
    })
  }

  pesquisarPorNomeProduto() {
    this.produtosService.findByProduto(this.NomeProduto).subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp
    })
  }
}
