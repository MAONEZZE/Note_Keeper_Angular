import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  //notaService: NotaService;
  //ou cria direto no parametro do construtor
  constructor(private notaService:NotaService, private categoriaservice: CategoriaService){}

  ngOnInit(): void { //Serve para carregar os objetos, so depois de carregar o html e css
    this.selecionarTodasNotas();
    this.selecionarTodasCategorias();
  }

  filtrarNotasPorCategoria(categoria: Categoria | null){
    if(categoria == null){
      this.selecionarTodasNotas();
      return;
    }
    this.selecionarNotasPorCategoria(categoria);
  }

  selecionarTodasCategorias(){
    this.categoriaservice.selecionarTodos().subscribe((cat) => {
      this.categorias = cat;
    })
  }

  selecionarTodasNotas(){
    this.notaService.selecionarTodos().subscribe((notas) => {
      this.notas = notas;
    });
  }

  selecionarNotasPorCategoria(categoria: Categoria){
    this.notaService.selecionarNotasPorCategoria(categoria).subscribe((notas) =>{
      this.notas = notas
    })

  }
}
