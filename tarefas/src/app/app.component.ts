import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styles: [`
      nav a {
        padding: 5px;
        border: thin solid black;
        text-decoration: none;
        font-size: 100%;
      }
      .ativo {
        background-color: #666;
        color: white;
      }
    `],
    template: `
      <h1>Gestão de Tarefas</h1>
      <nav>
        <a routerLink="/tarefas" routerLinkActive="ativo">Tarefas</a>
        <a routerLink="/projetos" routerLinkActive="ativo">Projetos</a>
      </nav>
      <router-outlet></router-outlet>
      <copyright></copyright>
    `
})
export class AppComponent { }