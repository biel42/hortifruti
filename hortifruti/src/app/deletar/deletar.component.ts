import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  produto: Produtos = new Produtos
  delOk: boolean = false

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produto = resp
    }, err => {
      console.log(`erro: ${err.status}, não conseguimos encontrar o ID.`)
    })
  }

  btnSim() {

    this.produtosService.deleteProduto(this.produto.id).subscribe(() => {
      alert(`O item foi deletado corretamente.`)
      this.router.navigate(['/loja'])
    })

  }

  btnNao() {
    this.router.navigate(['/loja'])
  }

}
