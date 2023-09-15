import { Injectable } from "@angular/core";
import { Categoria } from "./categoria";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private API_URL = 'http://localhost:3000/categorias';
  private http: HttpClient;

  constructor(http: HttpClient){
    this.http = http;
  }

  criar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.API_URL, categoria)
  }

  editar(){

  }

  excluir(){

  }

  selecionarPorId(){
    
  }

  selecionarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API_URL);
  }


}