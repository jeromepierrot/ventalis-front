import { AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, MinValidator, Validators } from "@angular/forms";
import { ApiMsecurityService } from "../../services/api-msecurity.service";

@Component({
  selector: 'vtl-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, AfterViewInit, AfterContentChecked {


  loginFormComplete!: boolean;
  emailCompleted!: boolean;
  pwdCompleted!: boolean;
  emailInput!: string;
  pwdInput!: string;

  /* formControl attributes*/
  hide!:boolean;
  loginFormGroup = this._formBuilder.group({
    loginCtrl: ['', [Validators.required, Validators.email]]
  });
  pwdFormGroup = this._formBuilder.group({
    pwdCtrl: ['', Validators.required]     // TODO: add a better password validator, only min. 8 characters is checked (html)
  });
  isLinear = true;

  constructor(private router: Router, private _formBuilder: FormBuilder,
              private apiMsecurityService: ApiMsecurityService) { }

  ngOnInit(): void {
        this.hide = true;
        this.loginFormComplete = false;
  }

  ngAfterViewInit(): void {
/*
    console.log('ngAfterViewInit()');
    this.loginFormComplete = this.emailCompleted = this.pwdCompleted = false;
    console.log("loginFormComplete = " + this.loginFormComplete);
    console.log("Email Ok :" + this.emailCompleted + " / mot de passe Ok : " + this.pwdCompleted);
*/
  }

  ngAfterContentChecked(): void {
/*    console.log('LOGIN FORM : ngAfterContentChecked()');*/
  }

  getErrorMessage(): string {
    this.emailCompleted = false;
    if(this.loginFormGroup.controls.loginCtrl.hasError('required')) {
      return '*identifiant obligatoire';
    }

    if (this.loginFormGroup.controls.loginCtrl.hasError('email')) {
      return 'Adresse email non valide';
    }

    this.emailCompleted = true;
    return  '';
  }

  getPwdErrorMessage() {
    this.pwdCompleted = false;
    if(this.pwdFormGroup.controls.pwdCtrl.hasError('required')) {
      return '*mot de passe obligatoire';
    }

    if(this.pwdFormGroup.controls.pwdCtrl.hasError(MinValidator.toString())) {
      return '*mot de passe de 8 caractère minimum obligatoire';
    }

    if(this.pwdFormGroup.controls.pwdCtrl.hasError('email')) {
      return 'Adresse email non valide';
    }

    this.pwdCompleted = true;
    return '';
  }

  updateLoginFormComplete() {
    // TODO: add a better password validator
    // @ts-ignore
    this.loginFormComplete = !this.loginFormGroup.controls.loginCtrl.invalid && this.pwdInput?.length > 7 ;

    // TODO : remove after testing and validating
/*    console.log("loginFormComplete :" + this.loginFormComplete + "\n");
    console.log("Email Ok :" + this.emailCompleted + " / mot de passe Ok : " + this.pwdCompleted);
    console.log("Données du Formulaire de connexion : " +
      "emailInput: " + this.emailInput + " | " +
      "pwdInput: " + this.pwdInput?.length + " caractères");*/
  }

  onSubmit() {
    console.log("email : " + this.emailInput + " | mdp a " + this.pwdInput.length + " caractères");
    if (this.loginFormComplete) {
      let auth = `{"email": "${this.emailInput}", "password": "${this.pwdInput}"}`;

      console.log("body : " + auth);
      let jwt = this.apiMsecurityService.postLoginForm(auth);
      console.log("jwt : " + jwt);
    }
  }

  /* FOR TESTING purposes TODO: to be removed when auhtentification is set or mocks up */
  /*  onViewUserPage() {


      this.router.navigateByUrl("user")
    }

    onViewIntranetPage() {
      this.router.navigateByUrl("intranet")
    }

    onViewAdminPage() {
      this.router.navigateByUrl("admin")
    }
  */

  /* END OF TESTING PART */
}
