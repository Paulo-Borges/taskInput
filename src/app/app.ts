import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pai } from './pai/pai';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pai],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('taskInput');
}
