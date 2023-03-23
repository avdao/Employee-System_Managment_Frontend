import { Component, OnInit,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() dep:any;
  product_Id:Number=0
  employee_Id:String=""
  partipation_id=0
  Salary:Number=0
  EmployeeArray:any=[]
  constructor(private route: ActivatedRoute,private service:SharedService){

  }
  
  ngOnInit(): void {
    this.refreshEmployeeList()
    this.employee_Id=this.dep.employee_Id
    this.Salary=this.dep.Salary
    this.route.params.subscribe(params => {
      // Retrieve the value of the parameter
      const paramValue = params['id'];
      console.log('Parameter value:', paramValue);
    this.product_Id=paramValue
  })}

  refreshEmployeeList(){
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeArray=data
    })
  }
  addPartipation(value:String){
     console.log(this.employee_Id.substring(0,1))
    
    console.log(value)
    console.log(this.employee_Id.substring(0, 1))
    var val={project_id:this.product_Id,employee_id:this.employee_Id.substring(0, 1),salary:this.Salary}
    this.service.addPartipation(val).subscribe(res=>{
      alert(res.toString());})
  }}
 


