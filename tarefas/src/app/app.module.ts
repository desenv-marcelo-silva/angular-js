import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { ProjetosComponent } from './projetos.component';
import { CopyrightComponent } from './copyright.component';
import { TarefasService } from './tarefas.service';
import { ProjetosService } from './projetos.service';
import { PaginaInvalidaComponent } from './paginainvalida.component';

const rotas: Routes = [
  {path: 'projetos', component: ProjetosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
  {path: '**', component: PaginaInvalidaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    CopyrightComponent,
    PaginaInvalidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    TarefasService,
    ProjetosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }