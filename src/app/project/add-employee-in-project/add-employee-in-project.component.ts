import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-employee-in-project',
  templateUrl: './add-employee-in-project.component.html',
  styleUrls: ['./add-employee-in-project.component.css']
})
export class AddEmployeeInProjectComponent implements OnInit{
constructor(private route: ActivatedRoute,private service:SharedService){}
@Input() dep:any;
ModalTitle:string="Open Modal";
ActivateAddEditComp:boolean=false;
EmployeeArray:any=[]
ProjectInfo:any=[]
product_Id=0
ngOnInit(): void {

  this.refreshProjectInfoList()
}
refreshProjectInfoList(){
  this.route.params.subscribe(params => {
    // Retrieve the value of the parameter
    const paramValue = params['id'];
    console.log('Parameter value:', paramValue);
  this.product_Id=paramValue
})
  this.service.getPartipation(this.product_Id).subscribe(data=>{
    this.ProjectInfo=data
  })
}

addClick(){
  this.dep={
    partipation_id:0,
    employee_id:0,
    project_id:0,
    salary:0
  }
  this.ModalTitle="Add Partipation";
  this.ActivateAddEditComp=true;

}
closeClick(){
  this.ActivateAddEditComp=false;
  //this.refreshProjectList();

}
refreshEmployeeList(){
  this.service.getEmployeeList().subscribe(data=>{
    this.EmployeeArray=data
  })
}

}
