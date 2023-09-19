import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})

export class EditarCategoriaComponent implements OnInit{
  private route: ActivatedRoute;
  private router: Router;
  private categoriaService: CategoriaService;
  private toastService: ToastrService;
  categoria: Categoria;

  constructor(route: ActivatedRoute, router: Router, categoriaService: CategoriaService, toastService: ToastrService){
    this.categoria = new Categoria('', 0);

    this.route = route;
    this.router = router;
    this.categoriaService = categoriaService;
    this.toastService = toastService;
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id).subscribe((cat) =>{
      this.categoria = cat;
    });
  }

  cancelarClicado(){
    this.toastService.error(`Operação cancelada.`, 'Cancelamento');
    this.router.navigate(['/categoria', 'listar']);
  }

  editarCat(){
    this.categoriaService.editar(this.categoria).subscribe((cat) => {
      this.toastService.success(`Categoria ${cat} editada com sucesso.`, 'Sucesso');
    });

    this.router.navigate(['/categoria', 'listar']);
  }

}
