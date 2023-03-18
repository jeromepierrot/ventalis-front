import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
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
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-item/category-item.component';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from "@angular/material/divider";

import { UserButtonMenuComponent } from './user-button-menu/user-button-menu.component';
import { IntranetButtonMenuComponent } from './intranet-button-menu/intranet-button-menu.component';
import { AdminButtonMenuComponent } from './admin-button-menu/admin-button-menu.component';
import { FormsModule } from "@angular/forms";
import { AdminContentComponent } from './admin-content/admin-content.component';
import { IntranetContentComponent } from './intranet-content/intranet-content.component';
import { UserContentComponent } from './user-content/user-content.component';

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
    ProductListComponent,
    ProductItemComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatDividerModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }

}
