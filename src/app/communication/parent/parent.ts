import { Component } from '@angular/core';
@Component({
    selector:'parent-com',
    templateUrl:'./parent.html'
})

export class ParentComponent{
    BS_Value: any;
    P_msg:string = "This message is coming from Parent Component !";
    receiveChildValue:any;
    getEventFromChild(eventValue:any){
        this.receiveChildValue = eventValue;
    }
}