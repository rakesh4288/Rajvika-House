import { Component, OnInit } from '@angular/core';
import {CommonService } from '../../shared-services/common.service';

@Component({
    selector:'behaviour-subject-two',
    templateUrl:'./BS-two.component.html',
    providers:[CommonService]
})

export class BehaviourSubjectTwo implements OnInit{
    constructor(private _CommonService:CommonService){}
    latestBS_value:any;
    inputValue:any;

    ngOnInit(){
        this.getLatestBS();   
    }

    registerBSTwo(BSFormTwo:any){
        console.log('BSFormTwo =', BSFormTwo.value['BS-input-two']);
        this.inputValue = BSFormTwo.value['BS-input-two'];
        this._CommonService.carName.next(this.inputValue);
    }

    getLatestBS(){
        this._CommonService.carName.subscribe(
            res=>{
                this.latestBS_value = res;
                console.log('getLatestBS Value =', this.latestBS_value)
            },
            error=>{
                console.log('Not able to connect BS');
            }
        );
    }

}