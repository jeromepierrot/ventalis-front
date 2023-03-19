import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'vtl-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  nameRegexPattern:string = '^([a-zA-Z]\\-)';
  emailRegexPattern:string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$ ';
  passwordRegexPattern:string = '^([a-zA-Z])';

  /* formControl attributes*/
  hideOriginal!:boolean;
  hideCheck!:boolean;

  namingFormGroup = this._formBuilder.group({
    companyCtrl: ['', Validators.required],
    namingCtrl: ['', Validators.required],
    noCtrl: ['']
  });
  loginFormGroup = this._formBuilder.group({
    loginCtrl: ['', [Validators.required, Validators.email]],
    pwdCtrl: ['', Validators.required],
    checkCtrl: ['', Validators.required]
  });

  tacFormGroup = this._formBuilder.group({
    tacCtrl: ['', Validators.requiredTrue],
    noCtrl: ['']
  });


  isLinear = true;
  disabledButton!:boolean;

  constructor(private router: Router, private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.hideOriginal = true;
    this.hideCheck = true;
    this.disabledButton = false;
  }

  getCompanyErrorMessage() {
    return this.namingFormGroup.controls.companyCtrl.hasError('required') ? '*champ obligatoire' : '';
  }

  getNamingErrorMessage() {
    return this.namingFormGroup.controls.namingCtrl.hasError('required') ? '*champ obligatoire' : '';
  }

  getEmailErrorMessage() {
    if(this.loginFormGroup.controls.loginCtrl.hasError('required')) {
      return '*identifiant obligatoire';
    }
    return this.loginFormGroup.controls.loginCtrl.hasError('email') ? 'Adresse email non valide' : '';
  }

  getPwdErrorMessage() {
    if(this.loginFormGroup.controls.pwdCtrl.hasError('required')) {
      return '*mot de passe obligatoire';
    }

    // '*obligatoire 8 caractères minimum, comprenant au moins 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial'
/*    if(this.loginFormGroup.controls.pwdCtrl.hasError(MinValidator.toString())) {
      return '*8 caractères minimum obligatoire';
    }*/

    return this.loginFormGroup.controls.pwdCtrl.hasError('email') ? 'Mot de passe non valide' : '';
  }

  getCheckErrorMessage() {
    if(this.loginFormGroup.controls.checkCtrl.hasError('required')) {
      return '*validation du mot de passe obligatoire';
    }

    // '*obligatoire 8 caractères minimum, comprenant au moins 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial'
/*    if(this.loginFormGroup.controls.checkCtrl.hasError(MinValidator.toString())) {
      return '*8 caractères minimum obligatoire';
    }*/

    return this.loginFormGroup.controls.checkCtrl.hasError('email') ? 'Mot de passe non valide' : '';
  }

  getTacErrorMessage(): string {
    if(this.loginFormGroup.controls.loginCtrl.hasError('required')) {
      return '*champs obligatoires';
    }
    return this.loginFormGroup.controls.loginCtrl.hasError('email') ? 'Case non cochées' : '';
  }
}
