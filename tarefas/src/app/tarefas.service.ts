import { Injectable } from '@angular/core';

export class Tarefa {
  codigo: number;
  tarefa: string;
  data: Date;
  prioridade: number;
  codigoprojeto: number;
}

@Injectable()
export class TarefasService {

  tarefas: Tarefa[] = [ 
    {codigo: 1, tarefa: 'Comprar leite', data: new Date(2017,7,15), prioridade: 1, codigoprojeto: 1},
    {codigo: 2, tarefa: 'Pagar a conta de luz', data: new Date(2017,7,1), prioridade: 2, codigoprojeto: 1},
    {codigo: 3, tarefa: 'Consertar a cafeteira', data: new Date(2017,7,7), prioridade: 3,codigoprojeto: 1},
    {codigo: 4, tarefa: 'Contratar desenvolvedor', data: new Date(2017,8,15), prioridade: 2, codigoprojeto: 2},
    {codigo: 5, tarefa: 'Planejar campanha online', data: new Date(2017,7,31), prioridade: 1, codigoprojeto: 2}
  ];

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

}