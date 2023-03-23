import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})


export class ShowDepComponent implements OnInit {
  constructor(private service:SharedService){}
  DepartmentList:any=[];
  EmployeeList:any=[];
  ModalTitle: string="";
  ActivateAddEditComp:boolean=false;
  dep:any;
  Department:string="Ok"

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Departent";
    this.ActivateAddEditComp=true;
    this.refreshDepList()
  
  }
  deleteClick(item:any){
    if(confirm("Are you sure??")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString())
        this.refreshDepList()
      })
    }
  }


  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshDepList();

  }
  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit Department"
    this.ActivateAddEditComp=true;
    this.refreshDepList()

  }
  refreshDepList(){
    this.service.getDepList().subscribe(data =>{
      this.DepartmentList=data;
    })
  }
}
