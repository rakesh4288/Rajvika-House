import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from '../shared-services/common.service';

@Component({
    selector:'rajvika-binding',
    templateUrl: './angular-binding.component.html',
    providers:[CommonService]
})

export class AngularBindingComponent implements OnInit{
    userList: any;
    constructor(
        private _Location:Location,
        private _CommonService:CommonService
    ){}
    pageTitle:string = "Angular Binding";
    propertyBindingText:string = "This statement is coming from comoponent class and binding to the template";
    num:number = 5;
    myId:string ="testId";
    waitForMe:boolean = false;
    textDanger:string = "text-danger";
    green:string = "green";
    
    ngOnInit(){
        this._CommonService.fetchUserList().subscribe(
            res=>{
                console.log("__CommonService Result =", res);
                this.userList = res;
            },
            error=>{
                console.log("Error: Getting error while connecting to service file");
            }
        );
    }

    backToPage(){
        this._Location.back();
    }
}