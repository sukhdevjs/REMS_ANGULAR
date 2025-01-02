import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import { StorageService } from './auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule,NzButtonModule,NzFormModule,NzSpinModule,NzInputModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Real_estate_angular';

  gotoLogin(){
    this.router.navigate(["/login"])
  }

   gotoRegister(){
    this.router.navigate(["/register"])
  }
  gotoAdminDashboard(){
    this.router.navigate(["/admin/dashboard"])
  }
  gotoCustomerDashboard(){
    this.router.navigate(["/customer/dashboard"])
  }

  gotoPostProperty(){
    this.router.navigate(["/admin/property"])
  }

  

  isAdminLoggedIn:boolean = StorageService.isAdminLoggedIn();
  isCustomerLoggedIn:boolean = StorageService.isCustomerLoggedIn();

  ngOnInit(){
    this.router.events.subscribe(event =>{
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    })
  }

  logOut(){
    StorageService.logOut();
    this.router.navigateByUrl("/login");
  }
  
}
