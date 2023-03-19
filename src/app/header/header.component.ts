import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoginDialogComponent } from "../login/login-dialog/login-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'vtl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  ///// TODO: the follow flags are here for testing purposes. They should be removed when Authentication's Api is ready
  public isLoggedIn: boolean = false;
  public hasAdminRole: boolean = false;
  public hasEmployeeRole: boolean = false;
  public hasUserRole: boolean = false;
  ///// END OF TESTING VALUES
  /**
   * Values to show/hide navbar sub-menu mode : Admin, Employee, User or Visitor
   */
  public showAdminSubMenu: boolean = false;

  public showEmployeeSubMenu: boolean = false;

  public showUserSubMenu: boolean = false;

  public showLoginSubMenu: boolean = true; //true by default
  /**
   * Options to show/hide items in the navbar sub-menu choices
   */
  public hideShortcutMenuItems: boolean = false;
  public hideSupportMenuItem: boolean = false;

  constructor(private router: Router, public loginDialog: MatDialog) { }

  onInit(){
    this.doCheck()
  }

  doCheck() {
    if (this.isLoggedIn) {
      if (this.hasAdminRole) {
        this.showAdminSubMenu = true;
        this.showEmployeeSubMenu = false;
        this.showUserSubMenu = false;
        this.showLoginSubMenu = false;
      } else if (this.hasEmployeeRole) {
        this.showAdminSubMenu = false;
        this.showEmployeeSubMenu = true;
        this.showUserSubMenu = false;
        this.showLoginSubMenu = false;
      } else {
        this.showAdminSubMenu = false;
        this.showEmployeeSubMenu = false;
        this.showUserSubMenu = true;
        this.showLoginSubMenu = false;
      }
    }  else {
      this.showLoginSubMenu = true;
    }
  }

  onViewHome() {
    ///// FOR TESTING Purposes ///// TODO: to be removed when authentication is set or mocks up */
    this.isLoggedIn = false // logs the user out, for testing purposes TODO: remove as soon as authentication/token is set or mocks up
    ///// END OF TEST PART /////
    this.router.navigateByUrl("")
  }
  onViewCatalog() {
    this.router.navigateByUrl("catalog")
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

  onViewLoginForm() {
    this.router.navigateByUrl("login")
  }

  openLoginDialog() {
    const dialogRef = this.loginDialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
