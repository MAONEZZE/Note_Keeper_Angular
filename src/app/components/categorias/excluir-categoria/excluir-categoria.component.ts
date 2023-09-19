import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent implements OnInit{
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
    this.voltarParaListagem();
  }

  voltarParaListagem(){
    this.router.navigate(['/categoria', 'listar']);
  }

  excluirCat(){
    this.categoriaService.possuiDependentes(this.categoria).subscribe((temDependentes: boolean) => { 
      const verificador: boolean = temDependentes 
    
      this.categoriaService.excluir(this.categoria, verificador).subscribe( () => {
        this.toastService.success(`Categoria excluida com sucesso.`, 'Sucesso');
        this.voltarParaListagem();
      });
    });
  }
}
