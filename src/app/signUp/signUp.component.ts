import { Component, OnInit } from '@angular/core';
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
  selector: 'app-signUp',
  imports: [
    NzFormModule,
    NzCardModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzDividerModule,
  ],
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSignUp(): void {}
}
