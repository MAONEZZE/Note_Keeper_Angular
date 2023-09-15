import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notas/listar',
    pathMatch: 'full' 
    //Se a rota estiver vazia, vai redirecionar para a rota notas/listar. 
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent,
    //Se estiver na rota notas/listar ele irá carregar ListarNotasComponent
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent
  },
  {
    path: 'notas/editar/:id',//o :id significa q vai ser um parametro -> Ex: notas/editar/1
    component: EditarNotaComponent
  },
  {
    path: 'notas/excluir/:id',//o :id significa q vai ser um parametro -> Ex: notas/editar/1
    component: ExcluirNotaComponent
  },
  {
    path: 'categoria/listar',
    component: ListarCategoriaComponent
  },
  {
    path: 'categoria/criar',
    component: CriarCategoriaComponent
  },
  {
    path: 'categoria/editar/:id',
    component: EditarCategoriaComponent
  },
  {
    path: 'categoria/excluir/:id',
    component: ExcluirCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
