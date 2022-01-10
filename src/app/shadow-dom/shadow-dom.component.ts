import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector:'shadow-dom',
    templateUrl: './shadow-dom.component.html',
    styleUrls:['./shadow-dom.component.scss'],
    encapsulation:ViewEncapsulation.Emulated
    //encapsulation:ViewEncapsulation.None
    //encapsulation:ViewEncapsulation.ShadowDom
})

export class ShadowDomComponent{
    constructor(
        private _Location:Location
    ){}
    pageTitle:string = "Angular View Encapsulation & Shadow Dom !";

    backToPage(){
        this._Location.back();
    }
}