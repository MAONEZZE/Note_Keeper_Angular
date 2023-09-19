import { Component, Input } from '@angular/core';
import { Nota } from '../nota';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class NotaComponent {
  @Input() nota: Nota = new Nota (0, '', '', 'dark');
}
