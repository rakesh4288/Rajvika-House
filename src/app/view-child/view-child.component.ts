import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { SampleDirectives } from './sample.directives';
import { NumberComponent } from './number.component';

@Component({
    selector:'rajvika-binding',
    templateUrl: './view-child.component.html'
})

export class ViewChildComponent{
    selectedValue: any;
    showOptionError: boolean = false;
    constructor( 
        private _Location:Location
    ){}

    pageTitle:string = "Angular View Child Decorator !!";


    // View child for Directives
    @ViewChild(SampleDirectives)
    private _SampleDirectives: SampleDirectives | undefined;

    // View child for Component
    @ViewChild(NumberComponent) 
    private _NumberComponent: NumberComponent | undefined;

    increase() {
       this._NumberComponent?.increaseByOne();
    }

    decrease() {
       this._NumberComponent?.decreaseByOne();
    }
    
    
    backToPage(){
        this._Location.back();
    }

    changeTextColor(event:any){
        //console.log('Event selected color =', event.target.value);
        this.selectedValue = event.target.value;
        if(this.selectedValue == ""){
            this.showOptionError = true;
        } else {
            this.showOptionError = true;
            this._SampleDirectives?.changeColor(event.target.value);
        }
    }
}