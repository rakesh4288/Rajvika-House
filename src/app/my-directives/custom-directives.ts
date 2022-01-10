// When we need to make custom directives then we must have to include plugin like Directive, ElementRef,HostListner
// We need to decorate the Directives
// Inside of Class=> we need use the constructor for making instance of ElementRef
// After all steps we must have include this class into any NgModule decorator

import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[custom-dir]'
})

export class MyCustomDirectives{
    constructor(myElement:ElementRef){
        myElement.nativeElement.innerText = "This is Custom Text which is exported by ElementRef using Directives And this is also clickable. We have used HostListner";
    }

    @HostListener('click') onclick(){
        alert('This is clickable by using HostListener');
    }
}