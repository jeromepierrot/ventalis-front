import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SigninFormComponent } from "./signin-form/signin-form.component";
import { AdminContentComponent } from "./admin-content/admin-content.component";
import { IntranetContentComponent } from "./intranet-content/intranet-content.component";
import { UserContentComponent } from "./user-content/user-content.component";

const routes: Routes = [
  { path: "admin", component: AdminContentComponent },
  { path: "intranet", component: IntranetContentComponent },
  { path: "user", component: UserContentComponent },
  { path: "products", component: CatalogComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signin", component: SigninFormComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
