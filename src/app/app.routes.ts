import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { SignUpComponent } from './signUp/signUp.component';
import { UserProfileComponent } from './userProfile/userProfile.component';
import { DataTableComponent } from './dataTable/dataTable.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'dataTable', component: DataTableComponent },
];
