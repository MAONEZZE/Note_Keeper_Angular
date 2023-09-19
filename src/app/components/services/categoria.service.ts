import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { Observable, map, switchMap } from "rxjs";

import { Categoria } from "../models/categoria";
import { Nota } from "../models/nota";
import { NotaService } from "./nota.service";



@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private API_URL = 'http://localhost:3000/categorias';
  private http: HttpClient;

  constructor(http: HttpClient, private notaService: NotaService, private dialog: MatDialog){
    this.http = http;
  }

  criar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.API_URL, categoria)
  }

  editar(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.API_URL}/${categoria.id}`, categoria);
  }

  excluir(categoria: Categoria, temDependentes: boolean): Observable<Categoria>{
    if(temDependentes){
      let resposta = window.confirm('Essa categoria está relacionado a mais notas e irá exclui-las, deseja mesmo excluir?')

      if(resposta){
        this.http.delete<Categoria>(`http://localhost:3000/notas?categoriaId=${categoria.id}`);
        return this.http.delete<Categoria>(`${this.API_URL}/${categoria.id}`);  
      }
      else{
        return new Observable;
      }
    }
    else{
      return this.http.delete<Categoria>(`${this.API_URL}/${categoria.id}`); 
    }
  }

  possuiDependentes(categoria: Categoria): Observable<boolean>{
    return this.notaService.selecionarNotasPorCategoria(categoria).pipe( map((notas: Nota[]) => {
      return notas.length > 0;
    }));

    /*O pipe é usado para criar uma sequência de operadores que serão aplicados a um Observable 
    para realizar transformações, filtragens, combinações e outras manipulações nos dados que 
    fluem pelo Observable.*/
  }

  selecionarPorId(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.API_URL}/${id}`);
  }

  selecionarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API_URL);
  }


}