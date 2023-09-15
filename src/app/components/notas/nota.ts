import { Categoria } from "./categorias/categoria";

export class Nota{
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  //categoria: Categoria;

  constructor(titulo: string, conteudo: string, tema: Tema, id?: number){
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema;
  }
}

type Tema = 'info'|'dark'|'warning'|'danger'