import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector:'model-driven-form',
    templateUrl:'./MDF.component.html'
})

export class MDF_Component implements OnInit{
    constructor( 
        private _Location:Location,
        private _studentFB:FormBuilder
    ){}

    pageTitle:string = "Model Driven Form or Reactive Form !!";
    cityList = ["Bhopal","Indore","Singrauli","Jabalpur","Itarsi","Gwalior"];
    //studentForm:FormGroup;
    ngOnInit(){
        
    }

    // studentForm = new FormGroup({
    //     'studentName': new FormControl("Rajvika Sahu"),
    //     'studentEmail': new FormControl("rajvika.sahu@gmail.com"),
    //     'studentPhone': new FormControl(9762462383),
    //     'studentCity': new FormControl("Singrauli"),
    //     'studentGender': new FormControl("Female"),
    //     'promotion': new FormControl(true)
    // });

    studentForm = new FormGroup({
        'studentName': new FormControl('', Validators.required),
        'studentEmail': new FormControl('', [Validators.required, Validators.email]),
        'studentPhone': new FormControl('', Validators.required),
        'studentCity': new FormControl('', Validators.required),
        'studentGender': new FormControl('', Validators.required),
        'promotion': new FormControl('', Validators.required)
    })

    backToPage(){
        this._Location.back();
    }
}