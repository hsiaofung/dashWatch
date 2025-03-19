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
  selector: 'app-forgotPassword',
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
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}
  onSubmit(): void {}
}
