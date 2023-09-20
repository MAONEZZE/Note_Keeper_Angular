import { Component } from '@angular/core';
import { Nota } from '../models/nota';

@Component({
  selector: 'app-formulario-criar-editar-notas',
  templateUrl: './formulario-criar-editar-notas.component.html',
  styleUrls: ['./formulario-criar-editar-notas.component.css']
})
export class FormularioCriarEditarNotasComponent {
  nota: Nota;

  constructor(){
    this.nota = new Nota (0, '', '', 'dark');
  }
}
