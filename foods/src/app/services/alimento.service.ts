import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AlimentoService {

  URL = 'http://localhost:3000/api/alimentos/buscar/';

  constructor(private http: HttpClient) { }

  getAlimento(id): Observable<any> {
      return this.http.get(this.URL + id );
  }
}
