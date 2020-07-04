import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  URL = 'http://localhost:3000/api/subcategorias/buscar/';

  constructor(private http: HttpClient) { }
  getSubCategory(categoria): Observable<any> {
    return this.http.get(this.URL + categoria );
  }
}
