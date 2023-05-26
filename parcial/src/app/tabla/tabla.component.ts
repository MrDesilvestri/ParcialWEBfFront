import { Component } from '@angular/core';
import { Libro } from '../libro';
import { Input } from '@angular/core';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  libros : Libro [] = [];
  /*
  title: string;
  referencia: string;
  autor: string;
  precio: number;
  ubicacion: string;
  */
  libro2 = {
    title: "El Señor de los Anillos",
    referencia: "HR12345",
    autor: "J.R.R. Tolkien",
    precio: 0,
    ubicacion: "A34"
  };

  constructor(private libroService:LibroService) {
  }

  Listar(){
    this.libroService.getLibros("/listar").subscribe(data=>{
      this.libros=data;
    });
  }
  Insertar(){
    this.libroService.postLibro("/insertar", this.libro2);
  }
}

