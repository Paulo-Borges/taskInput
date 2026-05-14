import { Component } from '@angular/core';
import { Filho } from '../filho/filho';
import { FilhoTwo } from '../filho-two/filho-two';

@Component({
  selector: 'app-pai',
  imports: [Filho, FilhoTwo],
  templateUrl: './pai.html',
  styleUrl: './pai.css',
})
export class Pai {}
