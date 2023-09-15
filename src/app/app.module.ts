import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { NotaComponent } from './components/notas/card-nota/card-nota.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CriarCategoriaComponent } from './components/notas/categorias/criar-categoria/criar-categoria.component';
import { ListarCategoriaComponent } from './components/notas/categorias/listar-categoria/listar-categoria.component';
import { ExcluirCategoriaComponent } from './components/notas/categorias/excluir-categoria/excluir-categoria.component';
import { EditarCategoriaComponent } from './components/notas/categorias/editar-categoria/editar-categoria.component';

@NgModule({
  declarations: [//todos os documentos declarados pelo app module, mas so faz isso automatico se criar pelo comando
    AppComponent,
    NavbarComponent,
    ListarNotasComponent,
    NotaComponent,
    CriarNotaComponent,
    EditarNotaComponent,
    ExcluirNotaComponent,
    CriarCategoriaComponent,
    ListarCategoriaComponent,
    ExcluirCategoriaComponent,
    EditarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

    ToastrModule.forRoot({//Injeta os serviços em todos os componentes
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      //preventDuplicates: true, -> acso vc faça muitas ações isso evita que apareça um monte de toasts
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
