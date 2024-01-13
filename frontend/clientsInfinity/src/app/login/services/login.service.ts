import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl = 'http://localhost:3000/api/client/login';

  constructor(private http: HttpClient) {}

 public loginPost(email: string, password: string): Observable <{token:string}> {
    const credentials = { email, password };
    // Realiza una solicitud POST al servidor para autenticar al usuario
    return this.http.post<{token:string}>(this.apiUrl, credentials);
  }
/*
  isAuth():boolean{
    const token=localStorage.getItem('token')
    if(!token){
      return false
    }
    return true
  } */

}
