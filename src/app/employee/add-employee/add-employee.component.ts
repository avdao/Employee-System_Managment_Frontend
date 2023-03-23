import { Component,Input ,OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  @Input() dep:any;
  EmployeeId:String="";
  EmployeeName:string="";
  Department:string="";
  DateofJoining:String=""
  DepartmentList:any=[];

  constructor(private service:SharedService){}
  
  ngOnInit(): void {
    this.EmployeeId=this.dep.EmployeeId,
    this.EmployeeName=this.dep.EmployeeName,
    this.Department=this.dep.Deparment,
    this.DateofJoining=this.dep.DateofJoining
    this.service.getAllDepartmentNames().subscribe(data =>{
      console.log(this.DepartmentList)
      this.DepartmentList=data;
    })

  }
  addEmployee(){
    var val={EmployeeId:this.EmployeeId,EmployeeName:this.EmployeeName,Deparment:this.Department,DateofJoining:this.DateofJoining}
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());})
  }
  

  updateEmployee(){
    var val={EmployeeId:this.EmployeeId,EmployeeName:this.EmployeeName,Deparment:this.Department,DateofJoining:this.DateofJoining}
    this.service.putEmployee(val).subscribe(res=>{
      alert(res.toString());})
  }

}
