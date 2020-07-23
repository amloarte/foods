import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaAlimentos } from './../interface/alimento';

@Injectable({
  providedIn: 'root'
})

export class AlimentoService {

  alimentos: RespuestaAlimentos[];


  URL = 'http://localhost:3000/api/alimentos/';
  URL_Buscar = 'http://localhost:3000/api/alimentos/buscar/';

  constructor(private http: HttpClient) { }

  getAlimento(id): Observable<any> {
      return this.http.get(this.URL_Buscar + id );
  }

  getOneAlimento(idAlimento) {
    return this.http.get(this.URL + idAlimento);
  }
}
