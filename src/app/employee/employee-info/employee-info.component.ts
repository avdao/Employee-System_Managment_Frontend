import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  constructor(private service:SharedService,private route:ActivatedRoute){}
  val:any={}
  product_Id:Number=0
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Retrieve the value of the parameter
      const paramValue = params['id2'];
      console.log('Parameter value:', paramValue);
    this.product_Id=paramValue
  })  
  this.refreshList(this.product_Id)

 }


  refreshList(val:Number){
    this.service.getEmployeeInfo(val).subscribe(data=>{
      this.val=data
      console.log(data)
    })

  }
  }



