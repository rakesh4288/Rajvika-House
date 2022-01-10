import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector:'communication',
    templateUrl:'./communication.html'
})

export class CommunicationComponent{
    constructor(private _Location:Location){}
    pageTitle:string = "Angular - Component Communication or Interaction";

    backToPage(){
        this._Location.back();
    }
}