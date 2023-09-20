import { Component, Input, Output } from '@angular/core';
import { Nota } from '../../models/nota';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class NotaComponent {
  @Input() nota: Nota; 

  constructor(){
    this.nota = new Nota (0, '', '', 'dark');
  }

  arquivarNota(nota: Nota): void{

  }
}
