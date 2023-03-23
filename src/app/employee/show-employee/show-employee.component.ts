import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  constructor(private service:SharedService){}
  EmployeeList:any=[];
  ModalTitle: string="";
  ActivateAddEditComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  addClick(){
    this.dep={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateofJoining:"",
      photoFileName:""

    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditComp=true;
    this.refreshEmployeeList()
  
  }
  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshEmployeeList();

  }
  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit Employee"
    this.ActivateAddEditComp=true;
    this.refreshEmployeeList()

  }
  
  refreshEmployeeList(){
    this.service.getEmployeeList().subscribe(data =>{
      console.log(this.EmployeeList)
      this.EmployeeList=data;
    })
  }
  deleteClick(item:any){
    if(confirm("Are you sure??")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        console.log("dddd")
        alert(data.toString())
        this.refreshEmployeeList()
      })
    }
  }
}
