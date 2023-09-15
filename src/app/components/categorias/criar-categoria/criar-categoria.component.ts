import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  private categoriaService: CategoriaService;
  private router: Router;
  private toastService: ToastrService;
  categoria: Categoria;

  constructor(categoriaService: CategoriaService, router: Router, toastService: ToastrService){
    this.categoria = new Categoria('', 0);

    this.categoriaService = categoriaService;
    this.router = router;
    this.toastService = toastService;
  }

  criarCat(){
    this.categoriaService.criar(this.categoria).subscribe((cat) => {
      this.toastService.success(`Categoria ${cat.titulo} criada com sucesso.`, 'Sucesso');
    })

    this.router.navigate(['/categoria', 'listar']);
  }
}
