import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiUrl="https://localhost:44301/api"
  readonly photoUrl="https://localhost:44301/Photos"
  constructor(private http:HttpClient) { }

  getDepList():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/department');
  }
  addDepartment(val:any){
    return this.http.post(this.apiUrl+'/Department',val)
  }
  putDepartment(val:any){
    return this.http.put(this.apiUrl+'/Department',val)
  }
  deleteDepartment(val:Number){
    return this.http.delete(this.apiUrl+'/Department/'+val)
  }
  getEmployeeList():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/employee');
  }
  addEmployee(val:any){
    return this.http.post(this.apiUrl+'/Employee',val)
  }
  putEmployee(val:any){
    return this.http.put(this.apiUrl+'/Employee',val)
  }
  deleteEmployee(val:Number){
    return this.http.delete(this.apiUrl+'/Employee/'+val)
  }
  upoloadPhoto(val:any){
    return this.http.post(this.apiUrl+'/Employee/SaveFile',val)
  }
  getAllDepartmentNames():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/Employee/GetAllDepartmentNames');
  }
  getEmployeebyDepartments(val:string):Observable<any>{ 
    return this.http.get<any>(this.apiUrl+'/Department/'+val);
  }
  getProjects():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/project')
  }
  deleteProjects(val:number){
    return this.http.delete(this.apiUrl+'/project/'+val)
  }
  addProject(val:any){
    return this.http.post(this.apiUrl+'/project',val)
  }
  putProject(val:any){
    return this.http.put(this.apiUrl+'/project',val)
  }
  addPartipation(val:any){
    return this.http.post(this.apiUrl+'/Partipation',val)
  }
  getPartipation(product_Id:Number){
    return this.http.get(this.apiUrl+'/Partipation/'+product_Id)
  }
  getEmployeeInfo(product_Id:Number){
    return this.http.get('https://localhost:44301/employee/'+product_Id)
  }
}

