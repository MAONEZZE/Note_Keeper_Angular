import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toastService: ToastrService){
    this.nota = new Nota ('', '','dark',0);
    
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);//o ! diz que não vai vir null
    
    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });
  }

  editarNota(){
    this.notaService.editar(this.nota).subscribe((nota) => {
      this.toastService.success(`Nota ${nota.titulo} editada com sucesso.`, 'Sucesso');
    });

    this.router.navigate(['/notas', 'listar']);
  }
}
