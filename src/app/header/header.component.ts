import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'vtl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onViewHome() {
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
    this.router.navigateByUrl("login")
  }


  onViewLang() {

  }
}
