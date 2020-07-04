import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaCategoria } from '../interface/categoria.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  readonly URL = 'http://localhost:3000/api/categorias/';

  constructor(private http: HttpClient) {  }

  getCategories() {
    return this.http.get<RespuestaCategoria[]>(this.URL);
  }
}
