import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly URL = 'http://localhost:3000/user/login';
  token: string = null;

  constructor( private http: HttpClient,
               private storange: Storage) { }

  login(usuario: string, password: string){
    const data = { usuario, password };
    return new Promise( resolve => {
      this.http.post(this.URL, data)
      .subscribe( resp => {

        if ( resp['access'] ) {
          this.guardarToken( resp['token'] );
          console.log(resp);
          resolve(true);
        } else {
          this.token = null;
          this.storange.clear();
          resolve(false);
        }
      });
    });

  }

  async guardarToken( token: string ){
    this.token = token;
    this.storange.set( 'token', token );
  }
}
