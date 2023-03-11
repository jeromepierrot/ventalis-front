import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'vtl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isLoggedIn: boolean = false;
  public hasAdminRole: boolean = false;
  public hasEmployeeRole: boolean = false;
  public hasUserRole: boolean = false;

  constructor(private router: Router) { }

  onViewHome() {
    ///// FOR TESTING Purposes ///// TODO: to be removed when auhtentification is set or mocks up */
    this.isLoggedIn = false // logs the user out, for testing purposes TODO: remove as soon as authentification/token is set or mocks up
    ///// END OF TEST PART /////
    this.router.navigateByUrl("")
  }
  onViewCatalog() {
    this.router.navigateByUrl("products")
  }

  onViewAbout() {
    this.router.navigateByUrl("about")
  }

  onViewContact() {
    this.router.navigateByUrl("contact")
  }

  onViewLogin() {
    ///// FOR TESTING purposes /////
    this.isLoggedIn = true
    this.hasUserRole = true // logs the user as User in, for testing purposes TODO: remove as soon as authentification/token is set or mocks up
    this.hasEmployeeRole = true // logs the user as Employee in, for testing purposes TODO: remove as soon as authentification/token is set or mocks up
    this.hasAdminRole = true // logs the user as Admin in, for testing purposes TODO: remove as soon as authentification/token is set or mocks up
    ///// END ODF TEST PART /////
    this.router.navigateByUrl("login")
  }


  onViewLang() {

  }
}
