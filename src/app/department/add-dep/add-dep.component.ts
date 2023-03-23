import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {


  constructor(private service:SharedService){}
  @Input() dep:any;
  DepartmentId:String="";
  DepartmentName:string="";


  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId,
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val={DepartmentId:this.DepartmentId,DepartmentName:this.DepartmentName}
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());})
  }
  

  updateDepartment(){
    var val={DepartmentId:this.DepartmentId,DepartmentName:this.DepartmentName}
    this.service.putDepartment(val).subscribe(res=>{
      alert(res.toString());})
  }
}
