import { Component, OnInit } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "../nota.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Categoria } from "../../categorias/categoria";
import { CategoriaService } from "../../categorias/categoria.service";

@Component({
  selector:  'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],//pede um array, porque poderia ter mais 
})

export class CriarNotaComponent implements OnInit{
  nota: Nota;
  categorias: Categoria[]

  constructor(private notaService: NotaService, private categoriaService: CategoriaService,private router: Router, private toastService: ToastrService){
    this.nota = new Nota (0, '', '', 'dark', new Categoria('', 0));
    this.categorias = [];
  }

  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe((cat) =>{
      this.categorias = cat;
    })
  }

  criarNota(){
    this.notaService.criar(this.nota).subscribe((nota) => {//o .criar é um Observable que é tipo uma promise
      this.toastService.success(`Nota ${nota.titulo} criada com sucesso.`, 'Sucesso');
    });

    this.router.navigate(["/notas", "listar"]);
    //aqui ele vai trocar o endereço de url e o angular reconhecer isso e vai chamar o novo componente
  }
}