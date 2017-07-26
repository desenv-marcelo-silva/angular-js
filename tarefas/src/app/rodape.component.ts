import { Component } from '@angular/core';

@Component({
  selector: 'rodape',
  template: `
    <footer>
        <p>Criação de componentes com Angular | Pós graduação PUC | Marcelo Silva | 2017</p>
    </footer>
  `,
  styles: ['footer {position: fixed; bottom: 0; color: blue;}']
})
export class RodapeComponent { }