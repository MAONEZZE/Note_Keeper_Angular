import { Categoria } from "../categorias/categoria";

export class Nota{
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  categoriaId: number;
  categoria: Categoria;

  constructor(categoriaId: number, titulo: string, conteudo: string, tema: Tema, categoria: Categoria, id?: number){
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema;

    this.categoriaId = categoriaId;
    this.categoria = categoria;
  }
}

type Tema = 'info'|'dark'|'warning'|'danger'