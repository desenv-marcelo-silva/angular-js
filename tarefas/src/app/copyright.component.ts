import { Component } from '@angular/core';

@Component({
  selector: 'copyright',
  template: `
    <p><small>© {{ano}} {{autor}}</small></p>
  `,
  styles: [`    
    p {
      margin-top: 2em;
    }  
  `]
})
export class CopyrightComponent {
  ano: number = 2017;
  autor: string = 'PUC Minas';
}