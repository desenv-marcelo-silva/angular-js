import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <p>
        <input #n type="text" [(ngModel)]="nome" />
        <span *ngIf="n.value.length<6">
          O nome deve ter no mínimo 6 caracteres.
        </span>
      </p>
      <p>Nome: {{nome}}</p>
    `
})
export class AppComponent { 
  nome:string = '';
}