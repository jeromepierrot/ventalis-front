import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'vtl-login-button-menu',
  templateUrl: './login-button-menu.component.html',
  styleUrls: ['./login-button-menu.component.scss']
})
export class LoginButtonMenuComponent {
  constructor(private router: Router) { }

  onViewLoginForm() {
    this.router.navigateByUrl("login")
  }
}
