import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';

@NgModule({
  declarations: [ AddEmployeeComponent, ModifyEmployeeComponent],
  imports: [
    // CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  constructor() {
    console.log('Admin module loaded.');
    }
 }
