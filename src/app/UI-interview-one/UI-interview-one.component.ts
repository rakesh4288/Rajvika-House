import { Component, 
    OnInit, 
    OnChanges, 
    SimpleChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector:'UI-interview-one',
    templateUrl:'./UI-interview-one.component.html'
})

export class UI_Interview_One_Component implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
    order:number= 1;
    constructor(){
        console.log('I am from constructor()!! and my order is: ' + this.order);
        this.order ++
    }

    ngOnChanges() {
        console.log('I am from ngOnChanges()!! and my order is:' + this.order);
        this.order++;
    }

    ngOnInit(){
        console.log('I am from ngOnInit()!! and my order is: ' + this.order);
        this.order ++
    }

    ngDoCheck(){
        console.log('I am from ngDoCheck()!! and my order is: ' + this.order);
        this.order ++
    }

    ngAfterContentInit(){
        console.log('I am from ngAfterContentInit()!! and my order is: ' + this.order);
        this.order ++
    }

    ngAfterContentChecked(){
        console.log('I am from ngAfterContentChecked()!! and my order is: ' + this.order);
        this.order ++
    }

    ngAfterViewInit(){
        console.log('I am from ngAfterViewInit()!! and my order is: ' + this.order);
        this.order ++
    }

    ngAfterViewChecked(){
        console.log('I am from ngAfterViewChecked()!! and my order is: ' + this.order);
        this.order ++
    }

    ngOnDestroy(){
        console.log('I am from ngOnDestroy()!! and my order is: ' + this.order);
        this.order ++
    }
}