import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [ViewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule {
  constructor() {
    console.log('Employee module loaded.');
    }
 }
