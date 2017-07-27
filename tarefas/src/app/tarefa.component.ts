import { Component } from '@angular/core';

@Component({
    selector: 'tarefa',
    styles: [ `
      input {
        padding: 5px;
        border: thin solid #999;
      }
      input.ng-touched.ng-valid {
        border-left: thick solid #0c0;
      }
      input.ng-touched.ng-invalid {
        border-left: thick solid #c00;
      }
      label {
        float: left; width: 5em;
        padding-top: 2px;
      }
    `],
    template: `
      <form #f="ngForm" (ngSubmit)="enviar(f.value)">
        <p>
          <label for="tarefa">Tarefa: </label>
          <input #tf="ngModel" type="text" [(ngModel)]="t.tarefa" 
                id="tarefa" name="tarefa" required />
          <span [hidden]="tf.untouched || tf.valid" style="color: red">
            A tarefa é obrigatória.
          </span>
        </p>
        <p>
          <label for="prioridade">Prioridade: </label>
          <select [(ngModel)]="t.prioridade" 
                  id="prioridade" name="prioridade" required >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
          </select>               
        </p>
        <p>
          <label for="data">Data: </label>
          <input #td="ngModel" type="date" [(ngModel)]="t.data" 
                id="data" name="data" required />
          <span [hidden]="td.untouched || td.valid" style="color: red">
            Data inválida.
          </span>
        </p>
        <p>
          <button input="submit" [disabled]="!f.valid">Enviar</button>
        </p>
      </form>
      <pre>{{t|json}}</pre>
    `
})
export class TarefaComponent { 
  t: any = {
    "tarefa": "Teste de tarefa",
    "prioridade": 1,
    "data": (new Date()).toISOString().slice(0,10)
  }
  enviar(dados) {
    console.log(dados);
  }
}