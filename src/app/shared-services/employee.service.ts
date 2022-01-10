import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerNewOption = {
    Headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
}

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    constructor(private _HttpClient:HttpClient){}
    // http://localhost:3000/employee-record
    base_url:string ="http://localhost:3000/employee-record/";
    emp_obj:any = {
        "emp-id": "589593",
        "name": "Riyash shah",
        "email": "riyansh.shah@tcs.com",
        "contact": 9826888148,
        "address":"Banglore",
        "gender":"male",
        "news-subscription":"No" 
    }

    addNewEmpRecord(employeeForm: any){
        return this._HttpClient.post(this.base_url,employeeForm);
    }

    fetchAllRecord(){
        return this._HttpClient.get(this.base_url);
    }

    updateEmpRecord(empData:any){
        return this._HttpClient.put(this.base_url + empData.id,empData);
    }

    removeEmpRecord(id:any){
        return this._HttpClient.delete(this.base_url + id);
    }
}