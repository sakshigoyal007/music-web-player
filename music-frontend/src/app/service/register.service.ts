import { Injectable } from '@angular/core';
import { Register } from 'register';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:8080/musix/user/";
  constructor(private http:HttpClient) { }

  getdata():Observable<Array<Register>>{
    console.log(" register service Component");
    return this.http.get<Array<Register>>(this.url);    
  }
  doRegistration(register:Register):Observable<Register>{
    console.log("register service working");
    return this.http.post<Register>('http://localhost:8080/musix/user',(register),{     
      headers: new HttpHeaders().set('Content-Type','application/json')
    });    
  }
  doLogIn(register:Register):Observable<Register>{  
    console.log("login service working");        
    return this.http.post<Register>('http://localhost:8080/musix/login',(register),{     
      headers: new HttpHeaders().set('Content-Type','application/json')
    });       
  }
}
