import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { BalanceManagementComponent } from './components/balance-management/balance-management.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShareTicketComponent } from './components/share-ticket/share-ticket.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    BalanceManagementComponent,
    LoginComponent,
    PersonalInformationComponent,
    SignUpComponent,
    ShareTicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
