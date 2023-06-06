import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ShareTicketComponent } from './components/share-ticket/share-ticket.component';
import { HistoryComponent } from './components/history/history.component';
import { BalanceManagementComponent } from './components/balance-management/balance-management.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'balance-management', component: BalanceManagementComponent },
  { path: 'share-ticket', component: ShareTicketComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
