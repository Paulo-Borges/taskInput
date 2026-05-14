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
    'Estudar Angular',
    'Estudar .NET',
    'Estudar C#',
    'Praticar Typescript',
  ];

  adicionarItem(novoItem: string) {
    if (novoItem) {
      this.listaDeTarefas = [...this.listaDeTarefas, novoItem];
    }
  }

  removerItem(index: number) {
    this.listaDeTarefas = this.listaDeTarefas.filter((_, i) => i !== index);
  }
}
