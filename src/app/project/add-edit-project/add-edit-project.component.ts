import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {
  @Input() dep:any;
  projectId:Number=0;
  name:string="";
  description:string="";
  startDate:string="";
  endDate:String="";
  budget:Number=0;


  constructor(private service:SharedService){}

  ngOnInit(): void {
    this.projectId=this.dep.projectId,
    this.name=this.dep.name,
    this.description=this.dep.description,
    this.startDate=this.dep.startDate,
    this.endDate=this.dep.endDate,
    this.budget=this.dep.budget
  }
  addProject(){
    var val={projectId:this.projectId,name:this.name,description:this.description,startDate:this.startDate,endDate:this.endDate,budget:this.budget}
    this.service.addProject(val).subscribe(res=>{
      alert(res.toString());})
  }
  

  updateProject(){
    var val={projectId:this.projectId,name:this.name,description:this.description,startDate:this.startDate,endDate:this.endDate,budget:this.budget}
    this.service.putProject(val).subscribe(res=>{
      alert(res.toString());})
  }

}
