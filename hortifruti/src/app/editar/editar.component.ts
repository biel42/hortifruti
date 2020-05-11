import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto: Produtos = new Produtos

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    var id = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produto = resp
    })
  }

  salvar() {
    this.produtosService.putProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.router.navigate(['/loja'])
      location.assign('/loja')
    })
  }

}
