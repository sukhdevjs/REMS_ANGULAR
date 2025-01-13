import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostPropertyComponent } from './components/post-property/post-property.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

const routes: Routes = [
  {path: "dashboard", component: AdminDashboardComponent  },
  {path: "property", component: PostPropertyComponent},
  {path: "property/:id/edit", component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
