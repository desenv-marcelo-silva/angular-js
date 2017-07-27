import { Component } from '@angular/core';

@Component({
    selector: 'paginainvalida',
    template: `
      <h1>Página inválida</h1>
      <p><a routerLink="/tarefas">Retornar</a></p>
    `
})
export class PaginaInvalidaComponent { }