import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { ProjetosComponent } from './projetos.component';
import { CopyrightComponent } from './copyright.component';
import { TarefasService } from './tarefas.service';
import { ProjetosService } from './projetos.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TarefasService,
    ProjetosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }