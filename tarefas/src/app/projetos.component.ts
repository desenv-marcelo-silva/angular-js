import { Component } from '@angular/core';
import { Projeto, ProjetosService } from './projetos.service';

@Component({
  selector: 'projetos',
  template: `
    <ul>
      <li *ngFor="let p of projetos">{{p.projeto}}</li>
    </ul>
  `
})
export class ProjetosComponent { 

  projetos: Projeto[] = [];

  constructor(public ps: ProjetosService) {
    this.projetos = ps.getProjetos();
  }

}