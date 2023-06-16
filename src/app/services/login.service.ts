import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredential } from '../models/login-credential';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginCredentials : LoginCredential) {
    console.log("login (service)");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const promise = this.http.post('http://localhost:3000/login',loginCredentials,httpOptions).toPromise();

    promise
      .then(res => {
        console.log(res);
        
      })
  }
}
