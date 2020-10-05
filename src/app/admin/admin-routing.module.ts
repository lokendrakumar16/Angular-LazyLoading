import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';

const routes: Routes = [
{ path: '', component: AddEmployeeComponent, pathMatch: 'full' },
{ path: 'modify', component: ModifyEmployeeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule {
  constructor() {
    console.log('Admin Routing module loaded.');
  }
}
