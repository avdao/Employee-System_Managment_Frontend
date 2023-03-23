import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeByDepartmentsComponent } from './department/employee-by-departments/employee-by-departments.component';
import { ProjectComponent } from './project/project.component';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { AddEmployeeInProjectComponent } from './project/add-employee-in-project/add-employee-in-project.component';
import { FormComponent } from './project/add-employee-in-project/form/form.component';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddDepComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    AddEmployeeComponent,
    EmployeeByDepartmentsComponent,
    ProjectComponent,
    AddEditProjectComponent,
    ShowProjectComponent,
    ProjectComponent,
    AddEmployeeInProjectComponent,
    FormComponent,
    EmployeeInfoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
