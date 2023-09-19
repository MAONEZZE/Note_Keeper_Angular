import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-filtros-por-categoria',
  templateUrl: './filtros-por-categoria.component.html',
  styleUrls: ['./filtros-por-categoria.component.css']
})
export class FiltrosPorCategoriaComponent{
  @Input({ required: true}) categorias: Categoria[] = [];
  //@Input() é usado para permitir que valores sejam passados para esse componente de fora (pelo html)
  //{ required: true} é um objeto de configuração que indica que esse atributo é obrigatório

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;
  //EventEmitters são usados para emitir eventos personalizados que outros componentes podem ouvir

  constructor(){
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas(){
    this.onFiltroSelecionado.emit(null);
  }

  selecionarComFiltro(categoria: Categoria){
    this.onFiltroSelecionado.emit(categoria);
  }
}
