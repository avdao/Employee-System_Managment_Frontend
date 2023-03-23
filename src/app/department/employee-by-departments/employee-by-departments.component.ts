import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-employee-by-departments',
  templateUrl: './employee-by-departments.component.html',
  styleUrls: ['./employee-by-departments.component.css']
})
export class EmployeeByDepartmentsComponent implements OnInit{

  constructor(private route: ActivatedRoute,private service:SharedService){}
  DepartmentList:any=[];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Retrieve the value of the parameter
      const paramValue = params['department'];
      console.log('Parameter value:', paramValue);
    this.refreshDepList(paramValue)
    });
  }

  refreshDepList(val:string){
    this.service.getEmployeebyDepartments(val).subscribe(data =>{
      this.DepartmentList=data;
    })
  }

}
