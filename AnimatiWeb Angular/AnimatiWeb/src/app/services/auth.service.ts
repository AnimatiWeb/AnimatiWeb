import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = '';

  constructor(private http: HttpClient) { 
    this.getTokenFromApi().subscribe(token => {
      this.token = token;
    });
  }

  getTokenFromApi(): Observable<string> {
    // Asegúrate de reemplazar 'url-de-tu-api' con la URL de tu API
    return this.http.get<string>('url-de-tu-api');
  }

  isAuth(){
    return this.token.length > 0;
  }

}
