import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'page-not-found',
    templateUrl:'./page-not-found.component.html'
})

export class PageNotFoundComponent{
    constructor(private _Router:Router){}

    goToHomePage(){
        //alert('inside goToHomePage');
        this._Router.navigateByUrl('/home');
    }

    
}