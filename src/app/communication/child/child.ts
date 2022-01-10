import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { CommonService } from '../../shared-services/common.service';

@Component({
    selector:'child-com',
    templateUrl:'./child.html',
    providers:[CommonService]
})

export class ChildComponent implements OnInit{
    constructor(private _CommonService: CommonService){}
    @Input() MSD:any;
    @Output() childEvent = new EventEmitter<string>();
    childValue:any = "This statement is coming from child component !"
    BS_Value:any;

    ngOnInit(){
        this.childEvent.emit(this.childValue);
        this._CommonService.carName.subscribe(
            res=>{
                this.BS_Value = res;
            },
            error=>{
                console.log("Not able to connect with serve file !");
            }
        );
    }

    doSomething(inputVale:any){
        console.log('inputVale = ', inputVale.value);
        this._CommonService.carName.next(inputVale.value);
    }
}