import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import {NzMessageService} from "ng-zorro-antd/message"
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  

  properties: any = [];

  constructor(private adminService: AdminService,
              private message: NzMessageService
  ) {
    this.getAllProperty();
  }

 getAllProperty(){
    this.adminService.getAllProperty().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) =>{
        element.processedImg = 'data:image/jpeg;base64,' + 
        element.returnedImage;
        this.properties.push(element);
      });
    })
  } 

  

  deleteProperty(id:number){
    this.properties = [];
    this.adminService.deleteProperty(id).subscribe((res) =>{
      this.message.success("Property Deleted Sucessfully", {nzDuration: 5000});
      this.getAllProperty();
    })

  }

}
