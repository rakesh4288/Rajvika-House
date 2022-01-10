import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../shared-services/employee.service';

@Component({
    selector:'rajvika-employee-crud',
    templateUrl:'./emp-crud.component.html',
    providers:[EmployeeService]
})

export class EmployeeCRUDComponent implements OnInit{
    empFormValue: any;
    constructor(
        private _EmployeeService:EmployeeService
    ){}
    pageTitle:string = "Rajvika Employee Crud Operations !";
    getEmpData:any;
    empObj = {
        empId: "",
        empName: "",
        empEmail: "",
        empPhone: "",
        empCity: "",
        empGender: "",
        news: "",
        id: ""
    }
    isEdit:boolean = false;

    ngOnInit(){
        this.getAllEmpRecord();
    }

    getAllEmpRecord(){
        return this._EmployeeService.fetchAllRecord().subscribe(
            res=>{
                this.getEmpData = res;
                //console.log("getAllEmpRecord =", res);
            },
            error=>{}
        )
    }

    inserNewRecord(employeeForm:any){
        //console.log('employeeForm =', employeeForm.value);
        this._EmployeeService.addNewEmpRecord(employeeForm.value).subscribe(
            res=>{
                //console.log("inserNewRecord ", res);
                this.getAllEmpRecord();
            },
            error=>{}
        );
    }

    editEmpRecord(updateEmpObject:any){
        this.empObj = updateEmpObject;
        this.isEdit = true;
    }

    updateEmpRecord(){
        this.isEdit = !this.isEdit;
        this._EmployeeService.updateEmpRecord(this.empObj).subscribe(
            res=>{
                this.getAllEmpRecord();
                this.empObj = {
                    empId: "",
                    empName: "",
                    empEmail: "",
                    empPhone: "",
                    empCity: "",
                    empGender: "",
                    news: "",
                    id: ""
                }
            },
            error =>{
                console.log("Not able to update !");
            }
        );
    }

    deleteEmpRecord(empId:any){
        console.log("emp id =", empId);
        if(confirm("Are You Sure Want to Delete this Record ?")){
            console.log("True Ho gaya Hai");
            this._EmployeeService.removeEmpRecord(empId).subscribe(
                ()=>{
                    console.log("Deleted Successfully !!");
                    this.getAllEmpRecord();
                }
            )
        }
        else{
            console.log("False Ho gaya Hai");
        }
    }
}