import { Component } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "../nota.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector:  'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],//pede um array, porque poderia ter mais 
})

export class CriarNotaComponent{
  nota: Nota;

  constructor(private notaService: NotaService, private router: Router, private toastService: ToastrService){
    this.nota = new Nota ('', '','dark',0);
  }

  criarNota(){
    this.notaService.criar(this.nota).subscribe((nota) => {//o .criar é um Observable que é tipo uma promise
      this.toastService.success(`Nota ${nota.titulo} criada com sucesso.`, 'Sucesso');
    });

    this.router.navigate(["/notas", "listar"]);
    //aqui ele vai trocar o endereço de url e o angular reconhecer isso e vai chamar o novo componente
  }
}