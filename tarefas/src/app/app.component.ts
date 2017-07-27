import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <h1>Gestão de Tarefas</h1>
      <h3>Projetos</h3>
      <projetos></projetos>
      <h3>Tarefas</h3>
      <tarefas></tarefas>
      <copyright></copyright>
    `
})
export class AppComponent { }