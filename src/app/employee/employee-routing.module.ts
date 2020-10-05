import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ViewEmployeeComponent, pathMatch: 'full' },
  { path: 'view', component: ViewEmployeeComponent, pathMatch: 'full' },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule { }
