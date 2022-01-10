import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared-services/common.service';

@Component({
    selector:'behaviour-subject-one',
    templateUrl:'./BS-one.component.html',
    providers:[CommonService]
})

export class BehaviourSubjectOne implements OnInit{
    constructor(private _CommonService:CommonService){}

    inputValue:any;
    latestBS_value:any;

    ngOnInit(){
        this.shareLatestValue();
    }

    saveForm(formValue: any){
        console.log('formValue =', formValue.value['BS-input-one']);
        this.inputValue = formValue.value['BS-input-one'];
        this._CommonService.carName.next(this.inputValue);
    }

    shareLatestValue(){
        return this._CommonService.carName.subscribe(
            res=>{ 
                console.log("Getting latest value", res);
                this.latestBS_value = res;
            },
            error=>{
                console.log("Not able to connect with Behaviour Subject");
            }
        );
    }
}