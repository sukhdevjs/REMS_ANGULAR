import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from "ng-zorro-antd/message";
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSpinning = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
  private message: NzMessageService,
  private router : Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log(res);
      if(res.userId != null){
        const user = {
          id: res.userId,
          role: res.userRole
        }
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        if(StorageService.isAdminLoggedIn())
          this.router.navigateByUrl("/admin/dashboard");
        else 
        this.router.navigateByUrl("/customer/dashboard");
      } else{
        this.message.error("Bad Credentials", {nzDuration: 5000});
      }
    }) 
  }
}





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }
