import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterializeCollapsibleModule } from 'materialize-angular';
import { CompanyAddressComponent } from './components/company/company-form/company-address/company-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SignInComponent,
    SignUpComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyFormComponent,
    NavbarComponent,
    SearchComponent,
    SidenavComponent,
    CompanyAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterializeCollapsibleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }