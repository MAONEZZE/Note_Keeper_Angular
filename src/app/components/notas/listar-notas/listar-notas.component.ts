import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];

  //notaService: NotaService;
  //ou cria direto no parametro do construtor
  constructor(private notaService:NotaService){}

  ngOnInit(): void { //Serve para carregar os objetos, so depois de carregar o html e css
    this.notaService.selecionarTodos().subscribe((notas) => {
      this.notas = notas;
    });
  }
}
