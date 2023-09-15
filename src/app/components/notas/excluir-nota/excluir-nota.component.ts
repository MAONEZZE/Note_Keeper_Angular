import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent implements OnInit{
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toastService: ToastrService){
    this.nota = new Nota (0, '', '', 'dark', new Categoria('', 0));
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);//o ! diz que não vai vir null
    
    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });
  }
  
  excluirNota(){
    this.notaService.excluir(this.nota).subscribe((nota) => {//o .criar é um Observable que é tipo uma promise
      this.toastService.success(`Nota ${nota.titulo} excluida com sucesso.`, 'Sucesso');
    });

    this.router.navigate(['/notas', 'listar']);
  }
}
