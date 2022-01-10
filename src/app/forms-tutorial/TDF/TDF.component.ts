import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { studentDataModel } from '../student.model';

@Component({
    selector:'template-driven-form',
    templateUrl:'./TDF.component.html'
})

export class TDF_component{
    constructor(private _Location:Location){}
    pageTitle:string = "Template Driven Form !!";

    cityList = ["Bhopal","Indore","Singrauli","Jabalpur","Itarsi","Gwalior"];
    studentModel = new studentDataModel('Rajvika Sahu','rajvika.sahu@gmail.com',9762462383,"Singrauli","female",true);

    backToPage(){
        this._Location.back();
    }

    registerStudent(userForm:any){
        // console.log(this.studentModel);
        console.log(userForm);
    }
}