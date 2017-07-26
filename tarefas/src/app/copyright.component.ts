import { Component } from '@angular/core';

@Component({
  selector: 'copyright',
  template: `
    <p><small>© {{ano + ' ' + autor}}</small></p>
  `,
  styles: [`    
    p {
      margin-top: 2em;
    }  
  `]
})
export class CopyrightComponent {
  ano: number;
  autor: string;

  constructor() {
    this.ano = 2017;
    this.autor = 'PUC Minas | Marcelo Silva';
  }
}