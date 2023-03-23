import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {
  constructor(private service:SharedService){}
  ProjectList:any=[];
  ModalTitle: string="";
  ActivateAddEditComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshProjectList()
  }
  refreshProjectList(){
    this.service.getProjects().subscribe(data =>{
      this.ProjectList=data;
    })
  }
  addClick(){
    this.dep={
      projectId:0,
      name:"",
      description:"",
      startDate:"",
      endDate:"",
      budget:0

    }
    this.refreshProjectList()
    this.ModalTitle="Add Project";
    this.ActivateAddEditComp=true;

  }

closeClick(){
  this.ActivateAddEditComp=false;
  this.refreshProjectList();

}
editClick(item:any){
  this.dep=item;
  this.ModalTitle="Edit Project"
  this.ActivateAddEditComp=true;
  this.refreshProjectList();


}
deleteClick(item:any){
  if(confirm("Are you sure??")){
    this.service.deleteProjects(item.projectId).subscribe(data=>{
      console.log("dddd")
      alert(data.toString())
      this.refreshProjectList()
    })
  }
}
  
}
