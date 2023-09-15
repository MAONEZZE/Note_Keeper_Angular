import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit{
  private categoriaService: CategoriaService;
  categorias: Categoria[] = [];

  constructor(categoriaService: CategoriaService){
    this.categoriaService = categoriaService;
  }

  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe((cat) => {
      this.categorias = cat;
    })
  }
  
}
