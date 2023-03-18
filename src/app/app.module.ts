import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginButtonMenuComponent } from './login-button-menu/login-button-menu.component';
import { LangButtonMenuComponent } from './lang-button-menu/lang-button-menu.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { UserButtonMenuComponent } from './user-button-menu/user-button-menu.component';
import { IntranetButtonMenuComponent } from './intranet-button-menu/intranet-button-menu.component';
import { AdminButtonMenuComponent } from './admin-button-menu/admin-button-menu.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { IntranetContentComponent } from './intranet-content/intranet-content.component';
import { UserContentComponent } from './user-content/user-content.component';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    AboutComponent,
    ContactComponent,

    LoginFormComponent,
    LoginButtonMenuComponent,
    SigninFormComponent,

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
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
