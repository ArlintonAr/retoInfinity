import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Client } from '../interfaces/client';
import { ClientPost } from '../interfaces/clientsPost';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  public apiUrl: string = 'http://localhost:3000/api/client'

  public apiUrlToken:string='http://localhost:3000/api/generateToken'


  constructor(private http: HttpClient) { }


  getClients(): Observable<{ clients: Client[] }> {
    return this.http.get<{ clients: Client[] }>(this.apiUrl)

  }
  getTokens(): Observable<{ tokens: Token[] }> {
    return this.http.get<{ tokens: Token[] }>(this.apiUrlToken)

  }
  postClients(client:ClientPost,):Observable <{client:string}>{
    return this.http.post<{client:string}>(this.apiUrl, client);

  }

}

