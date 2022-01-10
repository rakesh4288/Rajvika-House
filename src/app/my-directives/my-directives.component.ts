import { Component } from '@angular/core';

@Component({
    selector:'my-directives',
    templateUrl:'./my-directives.component.html'
})

export class MyDirectivesComponent{
    pageTitle:string = "Angular Directives";
    condition:boolean = true;
    checkbox1:any;
    checkbox2:any;
    isLoggedIn:boolean = true;
    loggedOut:boolean = false;
    angularModules = ["Modules","Component","Template","MetaData","Directives","Data Binding","Services","Dependecy Injection"];
    colors = ["Red","Green","Blue"];
    switchColor:any;
}