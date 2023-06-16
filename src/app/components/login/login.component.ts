import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginCredential } from 'src/app/models/login-credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private loginService: LoginService) { }

  get userEmail() { return this.loginForm.get('userEmail') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userEmail.value);
    console.log(this.password.value);
    
    const logrinCredentials = new LoginCredential(this.userEmail.value, this.password.value);

    console.log("entro en login (component)");
    
    this.loginService.login(logrinCredentials);
  }

}
