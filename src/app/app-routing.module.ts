import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AdminContentComponent } from "./admin-content/admin-content.component";
import { IntranetContentComponent } from "./intranet-content/intranet-content.component";
import { UserContentComponent } from "./user-content/user-content.component";
import { LoginDialogComponent } from "./login/login-dialog/login-dialog.component";

const routes: Routes = [
  { path: "admin", component: AdminContentComponent },
  { path: "intranet", component: IntranetContentComponent },
  { path: "user", component: UserContentComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginDialogComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
