import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
  nota: Nota;
  categorias: Categoria[] = [];

  constructor(private route: ActivatedRoute, private notaService: NotaService, private categoriaService: CategoriaService, private router: Router, private toastService: ToastrService){
    this.nota = new Nota (0, '', '', 'dark');
  }

  ngOnInit(): void {
    this.trazerNota();
    this.trazerCategoria();
  }

  cancelarClicado(){
    this.toastService.error(`Operação cancelada.`, 'Cancelamento');
    this.router.navigate(["/notas", "listar"]);
  }

  trazerCategoria(){
    this.categoriaService.selecionarTodos().subscribe((cat) => {
      this.categorias = cat;
    })
  }

  trazerNota(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);//o ! diz que não vai vir null
    
    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });
  }

  editarNota(){
    this.notaService.editar(this.nota).subscribe((nota) => {
      this.toastService.success(`Nota ${nota.titulo} editada com sucesso.`, 'Sucesso');
    });

    this.router.navigate(['/notas', 'listar']);
  }
}
