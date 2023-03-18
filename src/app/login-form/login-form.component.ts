import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'vtl-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private router: Router) { }

  /* FOR TESTING purposes TODO: to be removed when auhtentification is set or mocks up */
  onViewUserPage() {

    this.router.navigateByUrl("user")
  }

  onViewIntranetPage() {
    this.router.navigateByUrl("intranet")
  }

  onViewAdminPage() {
    this.router.navigateByUrl("admin")
  }

  /* END OF TESTING PART */
}
