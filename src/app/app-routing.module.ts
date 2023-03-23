import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeByDepartmentsComponent } from './department/employee-by-departments/employee-by-departments.component';
import { ProjectComponent } from './project/project.component';
import { AddEmployeeInProjectComponent } from './project/add-employee-in-project/add-employee-in-project.component';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'employeebyDepartment/:department',component:EmployeeByDepartmentsComponent},
  {path:'employeeInProject/:id',component:AddEmployeeInProjectComponent},
  {path:'employeeInfo/:id2',component:EmployeeInfoComponent},
  {path:'project',component:ProjectComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
