import { Component, signal, WritableSignal  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-userProfile',
  imports: [
    NzFormModule,
    NzCardModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzDividerModule,
    NzUploadModule,
    NzAvatarModule,
  ],
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css'],
})
export class UserProfileComponent {
  profileForm: FormGroup;
  avatarUrl: WritableSignal<string> = signal('https://i.pravatar.cc/100'); // 預設頭像  

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: ['JohnDoe', Validators.required],
      email: [{ value: 'johndoe@example.com', disabled: true }],
      location: [''],
      bio: [''],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.value);
    }
  }

  handleAvatarChange(event: any) {
    console.log('Avatar Upload:', event);
    this.avatarUrl.set('https://i.pravatar.cc/100?' + Math.random());
  }

  changePassword() {
    console.log('Redirect to Change Password Page');
  }
}
