import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleServiceobjectsService {

  constructor( private http: HttpClient) { }

 
  apikey = "AIzaSyAvxbpnF09Uk-mkzNDYLYz5411dWHdSE1o";
  URL_API = 'https://www.googleapis.com/drive/v3/files/';

  get_objectfromDriven(fileId): Observable<any> {
    const param= new HttpParams();
    param.set('key', this.apikey);
    param.set('alt', 'media');

    const headers = new HttpHeaders({
      'Content-Type':'application/octet-stream',
      'Response-Type':'blob'
    });

    console.log("Tesssssss " + this.URL_API)

    // return this.http.get(this.URL_API + fileId+ "?alt=media&"+"key="+ this.apikey, {headers:headers});
    return this.http.get(this.URL_API + fileId+ "?alt=media&"+"key="+ this.apikey, {responseType: "blob"});
    
  }
}
