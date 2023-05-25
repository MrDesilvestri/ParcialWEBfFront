import { Component } from '@angular/core';
import { Libro } from '../libro';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() libros! : Libro;

  constructor() {
  }

  Listar(){

  }
  Insertar(){

  }
}

