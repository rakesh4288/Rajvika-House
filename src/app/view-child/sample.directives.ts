import { Directive, ElementRef,AfterViewInit } from '@angular/core';

// For making any directives we must need to include the Directives with Element Ref

@Directive({
    selector: '[color-changer]'
})

// Always remember when need to decorate the directives we need to use selector meta data with []

export class SampleDirectives{
    constructor(private _ElementRef: ElementRef){}

    // ngAfterViewInit() {
    //     this._ElementRef.nativeElement.style.color = 'red';
    // }

    changeColor(changeColor:string){
        this._ElementRef.nativeElement.style.color = changeColor;
    }

}