import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
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

  cancelarClicado(){
    this.toastService.error(`Operação cancelada.`, 'Cancelamento');
    this.router.navigate(['/categoria', 'listar']);
  }

  criarCat(){
    this.categoriaService.criar(this.categoria).subscribe((cat) => {
      this.toastService.success(`Categoria ${cat.titulo} criada com sucesso.`, 'Sucesso');
    })

    this.router.navigate(['/categoria', 'listar']);
  }
}
