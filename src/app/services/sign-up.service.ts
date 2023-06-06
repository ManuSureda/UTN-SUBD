import { Injectable } from '@angular/core';
import { SignUpCredentials } from '../models/sign-up-credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {


  constructor(private http: HttpClient) { }

  signUp(signupCredential: SignUpCredentials) {
    console.log(signupCredential);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const promise = this.http.post('http://localhost:3000/signup',signupCredential,httpOptions).toPromise();
  }
}
