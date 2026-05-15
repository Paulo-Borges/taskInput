import { Component } from '@angular/core';
import { Filho } from '../filho/filho';
import { FilhoTwo } from '../filho-two/filho-two';

@Component({
  selector: 'app-pai',
  imports: [Filho, FilhoTwo],
  templateUrl: './pai.html',
  styleUrl: './pai.css',
})
export class Pai {
  listaDeTarefas: string[] = [
    'Arrumar a casa',
    'Lavar as louças',
    'Varrer o quintal',
    'Jogar o lixo ',
  ];

  tarefaEmAndamento: string | null = null;

  adicionarItem(novoItem: string) {
    if (novoItem) {
      this.listaDeTarefas = [...this.listaDeTarefas, novoItem];
    }
  }

  removerItem(index: number) {
    const tarefaNome = this.listaDeTarefas[index];
    this.listaDeTarefas = this.listaDeTarefas.filter((_, i) => i !== index);
    this.tarefaEmAndamento = `A Filha finalizou a tarefa: ${tarefaNome}!`;
  }

  startTask(index: number) {
    const tarefaNome = this.listaDeTarefas[index];
    this.tarefaEmAndamento = `A Filha começou a tarefa: ${tarefaNome}!`;

    console.log(this.tarefaEmAndamento);
  }
}
