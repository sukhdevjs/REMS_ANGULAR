import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  isSpinning = false;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService:AuthService
  ) {
    this.signupForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      username: ['']
    });
  }
  signup(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
