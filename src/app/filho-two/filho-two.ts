import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho-two',
  imports: [],
  templateUrl: './filho-two.html',
  styleUrl: './filho-two.css',
})
export class FilhoTwo {
  @Input() listaRecebida: string[] = [];
  @Input() tarefaSendoExecutada: string | null = null;
}
