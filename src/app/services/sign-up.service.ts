import { Injectable } from '@angular/core';
import { SignUpCredentials } from '../models/sign-up-credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  signUp(signupCredential: SignUpCredentials): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const promise = this.http.post(this.apiUrl+'signup',signupCredential,httpOptions).toPromise();

    promise
      .then(response => {
        console.log(response);
        
      })
      .catch(error => {
        console.log(error);
        
      });

    return promise;
  }
}
