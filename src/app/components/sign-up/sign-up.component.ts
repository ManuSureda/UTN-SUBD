import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpCredentials } from 'src/app/models/sign-up-credentials';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  provinces: Array<string> = ["Bs As", "non available", "non available"];
  cities: Array<string> = ["Mar del Plata", "non available", "non available"];

  signupForm = new FormGroup({
    userEmail:        new FormControl('', [Validators.required]),
    password:         new FormControl('', [Validators.required]),
    name:             new FormControl('', [Validators.required]),
    lastName:         new FormControl('', [Validators.required]),
    emergencyContact: new FormControl('', [Validators.required]),
    zipCode:          new FormControl('', [Validators.required]),
    obraSocial:       new FormControl('', [Validators.required]),
    plan:             new FormControl('', [Validators.required])
  });

  constructor(private signUpService: SignUpService) { }

    get userEmail()        { return this.signupForm.get('userEmail'); }
    get password()         { return this.signupForm.get('password'); }
    get name()             { return this.signupForm.get('name'); }
    get lastName()         { return this.signupForm.get('lastName'); }
    get emergencyContact() { return this.signupForm.get('emergencyContact'); }
    // TODO: get city y get province
    get zipCode()          { return this.signupForm.get('zipCode'); }
    get obraSocial()       { return this.signupForm.get('obraSocial'); }
    get plan()             { return this.signupForm.get('plan'); }

  ngOnInit(): void {
    // TO-DO
    // provinces = getAllAvailableProvinces()
    // cities = []
    // cuando se selecciona una province -> cities = allCitiesIn(selectedProvince)
  }

  signup(): void {
    console.log("signup");
    
    const signupCredential = new SignUpCredentials(
      this.userEmail.value,
      this.password.value,
      this.name.value,
      this.lastName.value,
      this.emergencyContact.value,
      "Bs As",
      "Mar del Plata",
      this.zipCode.value,
      this.obraSocial.value,
      this.plan.value
    );

    this.signUpService.signUp(signupCredential);

    //promise
  }

}
