import { Injectable } from "@angular/core";
import { Nota } from "./nota";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../categorias/categoria";

@Injectable({
  providedIn: 'root',
  //root é o app module, ou seja elevai pegar a mesma instancia de todos os modulos 
    //Ex: ListarNotasComponent, NotaComponent, etc
})

export class NotaService{
  private API_URL = 'http://localhost:3000/notas';
  
  constructor(private http: HttpClient){
  }

  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota): Observable<Nota>{
    return this.http.put<Nota>(`${this.API_URL}/${nota.id}`, nota);
  }

  excluir(nota: Nota): Observable<Nota>{
    return this.http.delete<Nota>(`${this.API_URL}/${nota.id}`);
  }

  selecionarPorId(id: number): Observable<Nota>{
    return this.http.get<Nota>(`${this.API_URL}/${id}`);
  }

  selecionarTodos(): Observable<Nota[]>{
    return this.http.get<Nota[]>(this.API_URL);
  }

  selecionarNotasPorCategoria(categoria: Categoria): Observable<Nota[]>{
    const url = `http://localhost:3000/categorias/${categoria.id}?_embed=notas`
    return this.http.get<Nota[]>(url);
  }

}