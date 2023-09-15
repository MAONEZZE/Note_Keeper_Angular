import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class NotaComponent {
  @Input() nota: Nota = {
      id: 0,
      titulo: 'Lavar o cachorro 🦮',
      conteudo: 'Pegar a toalha > Pegar o Shampoo',
      tema: 'dark'
    };
}
