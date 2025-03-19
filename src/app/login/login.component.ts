import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-login',
  imports: [
    NzFormModule,
    NzCardModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzDividerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isPasswordVisible = false; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
    }
  }
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
  loginWithGoogle(): void {

  }
  loginWithFacebook():void {

  }

}
