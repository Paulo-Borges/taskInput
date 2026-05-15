import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.css',
})
export class Filho {
  @Input() listaRecebida: string[] = [];
  @Output() removerItem = new EventEmitter<number>();
  @Output() startTask = new EventEmitter<number>();

  onFinish(index: number) {
    this.removerItem.emit(index);
  }

  onStart(index: number) {
    this.startTask.emit(index);
  }
}
