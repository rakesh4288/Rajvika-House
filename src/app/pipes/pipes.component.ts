import { Component } from '@angular/core';

@Component({
    selector:'rajvika-pipes',
    templateUrl:'./pipes.component.html'
})

export class PipesComponent{
    pageTitle:string = "Angular Pipes – Getting Started !";
    itemPrice:number = 5.50;
    convertText:string = "Hello Rajvika";
    currentDate = Date.now();
    allUser = ["Rakesh","Lalita","Rajvika","Riyansh"];
    myNum1: number = 7.4364646;
    myNum2: number = 0.9;
    countryList = [
        { 'name':'Poland', 'capital':'Warsaw' },
        {'name':'Denmark','capital':'Copenhagen'},
        {'name':'Vietnam','capital':'Hanoi'},
        {'name':'Ukraine','capital':'Kiev'},
        {'name':'netherland','capital':'Amsterdam'}
    ];
}