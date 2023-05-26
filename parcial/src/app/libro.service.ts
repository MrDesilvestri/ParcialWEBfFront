import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libros:Libro[]=[];

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/libros";

  getLibros(action : String){
    return this.http.get<Libro[]>(this.url + action);
  }

  postLibro(action : String, libro : Libro){
    return this.http.post<Libro>(this.url + action, libro);
  }

}
