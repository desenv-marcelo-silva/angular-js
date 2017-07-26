/* import { Component } from '@angular/core';

@Component({
  selector: 'tarefas',
  template: `
    <ul>
      <li *ngFor="let tarefa of tarefas">{{tarefa}}</li>
    </ul>
  `
})
export class TarefasComponent { 

  tarefas: string[];

  constructor() {
    this.tarefas = [ 
      'Comprar leite',
      'Pagar a conta de luz', 
      'Consertar a cafeteira'
    ];
  }

} */

/* import { Component } from '@angular/core';

@Component({
  selector: 'tarefas',
  template: `
    <ul>
      <li *ngFor="let tarefa of tarefas">{{tarefa}}</li>
    </ul>
    <p *ngIf="tarefas.length==0">
      Parabéns, você não tem tarefa pendente!
    </p>
  `

})
export class TarefasComponent { 

  tarefas: string[];

  constructor() {
    this.tarefas = [ ];
  }

} */

import { Component } from '@angular/core';

@Component({
  selector: 'tarefas',
  template: `
     <div [ngSwitch]="grupo">
      <ul *ngSwitchCase="0">
        <li *ngFor="let tarefa of tarefasCasa">{{tarefa}}</li>
      </ul>
      <ul *ngSwitchCase="1">
        <li *ngFor="let tarefa of tarefasTrabalho">{{tarefa}}</li>
      </ul>
      <ul *ngSwitchDefault>
        <li *ngFor="let tarefa of tarefasOutras">{{tarefa}}</li>
      </ul>
    </div>
  `
})
export class TarefasComponent { 

  tarefasCasa: string[];
  tarefasTrabalho: string[];
  tarefasOutras: string[];
  grupo: number;

  constructor() {
    this.tarefasCasa = [ 
      'Comprar leite',
      'Pagar a conta de luz', 
      'Consertar a cafeteira'
    ];
    this.tarefasTrabalho = [
      'Elaborar campanha de marketing',
      'Contratar novos fornecedores'
    ];
    this.tarefasOutras = [
      'Criar aplicação com Angular'
    ];
    this.grupo = 0;
  }

}