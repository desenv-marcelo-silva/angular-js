import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styles: [ `
      input[type="text"] {
        padding: 5px;
        border: thin solid #999;
      }
      .ng-touched.ng-valid {
        border-left: thick solid #0c0;
      }
      .ng-touched.ng-invalid {
        border-left: thick solid #c00;
      }
    `],
    template: `
      <h1>Gestão de Tarefas</h1>
      <tarefa></tarefa>
      <p>
        <label>Nome: </label>
        <input #n="ngModel" type="text" [(ngModel)]="nome" required minlength="3" />
        <span [hidden]="n.untouched || n.valid" style="color: red">
          <span [hidden]="!n.errors?.required">
            O nome é obrigatório.
          </span>
          <span [hidden]="!n.errors?.minlength">
            O nome deve ter no mínimo {{n.errors?.minlength?.requiredLength}} caracteres.
          </span>
        </span>
      </p>
    `
})
export class AppComponent { 
  nome:string = '';
}