import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interface/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly URL = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }

  postUser(usuario: IUsuario) {
    return this.http.post(this.URL, usuario);
  }
}
