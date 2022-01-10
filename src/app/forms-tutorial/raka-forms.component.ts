import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'raka-forms',
    templateUrl:'./raka-forms.component.html'
})

export class RajvikaFormsComponent{
    constructor(
        private _Router:Router
    ){}
    pageTitle:string = "Angular Forms !!";

    open_TDF_Form(){
        this._Router.navigateByUrl('rajvika-forms/template-driven-forms');
    }

    open_Reactive_Form(){
        //alert('open_Reactive_Form');
        this._Router.navigateByUrl('rajvika-forms/model-driven-form');
    }
}
