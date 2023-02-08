import { UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'content-management' ,component:ContentManagementComponent},
  {path:'updatecontent/:id',component:UpdatecontentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
