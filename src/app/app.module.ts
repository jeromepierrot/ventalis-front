import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginButtonMenuComponent } from './login-button-menu/login-button-menu.component';
import { LangButtonMenuComponent } from './lang-button-menu/lang-button-menu.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { UserButtonMenuComponent } from './user-button-menu/user-button-menu.component';
import { IntranetButtonMenuComponent } from './intranet-button-menu/intranet-button-menu.component';
import { AdminButtonMenuComponent } from './admin-button-menu/admin-button-menu.component';
import { FormsModule } from "@angular/forms";
import { AdminContentComponent } from './admin-content/admin-content.component';
import { IntranetContentComponent } from './intranet-content/intranet-content.component';
import { UserContentComponent } from './user-content/user-content.component';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    LoginButtonMenuComponent,
    LangButtonMenuComponent,
    AdminButtonMenuComponent,
    AdminContentComponent,
    IntranetContentComponent,
    IntranetButtonMenuComponent,
    UserButtonMenuComponent,
    UserContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
