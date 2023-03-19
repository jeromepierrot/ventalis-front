import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, MinValidator, Validators } from "@angular/forms";

@Component({
  selector: 'vtl-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  /* formControl attributes*/
  hide!:boolean;
  loginFormGroup = this._formBuilder.group({
    loginCtrl: ['', [Validators.required, Validators.email]]
  });
  pwdFormGroup = this._formBuilder.group({
    pwdCtrl: ['', Validators.required]
  });
  isLinear = true;

  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
        this.hide = true;
    }

  getErrorMessage(): string {
    if(this.loginFormGroup.controls.loginCtrl.hasError('required')) {
      return '*identifiant obligatoire';
    }
    return this.loginFormGroup.controls.loginCtrl.hasError('email') ? 'Adresse email non valide' : '';
  }

  getPwdErrorMessage() {
    if(this.pwdFormGroup.controls.pwdCtrl.hasError('required')) {
      return '*mot de passe obligatoire';
    }

    if(this.pwdFormGroup.controls.pwdCtrl.hasError(MinValidator.toString())) {
      return '*mot de passe obligatoire';
    }

    return this.pwdFormGroup.controls.pwdCtrl.hasError('email') ? 'Adresse email non valide' : '';
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
