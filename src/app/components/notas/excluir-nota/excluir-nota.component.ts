import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../models/nota';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent implements OnInit{
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toastService: ToastrService){
    this.nota = new Nota (0, '', '', 'dark');
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);//o ! diz que não vai vir null
    
    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });
  }

  cancelarClicado(){
    this.toastService.error(`Operação cancelada.`, 'Cancelamento');
    this.router.navigate(["/notas", "listar"]);
  }
  
  excluirNota(){
    this.notaService.excluir(this.nota).subscribe((nota) => {//o .criar é um Observable que é tipo uma promise
      this.toastService.success(`Nota ${nota.titulo} excluida com sucesso.`, 'Sucesso');
    });

    this.router.navigate(['/notas', 'listar']);
  }
}
