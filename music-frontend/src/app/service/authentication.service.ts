import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   logged:boolean;
  constructor(private httpClient:HttpClient) { }

  authenticateUser(user){
    return this.httpClient.post('http://localhost:8080/musix/login',user);
  }


  setToken(token:string){
    localStorage.setItem('authToken',token);
  }
  getToken():string{
      return localStorage.getItem('authToken');
  }

}
