import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://31.220.57.121:9080/produtos/');
  }

  postProdutos(produto: Produtos) {
    return this.http.post('http://31.220.57.121:9080/produtos/', produto)
  }

  putProduto(produto: Produtos) {

    return this.http.put('http://31.220.57.121:9080/produtos/', produto)
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
  }

}
