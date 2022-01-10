import { NgModule } from '@angular/core';
import { MyDirectivesComponent } from './my-directives.component';
import {Routes, RouterModule } from '@angular/router';

const myD_routes:Routes = [
    {
        path:'',
        component:MyDirectivesComponent
    }
]

@NgModule({
    declarations:[ ],
    imports:[ RouterModule.forChild(myD_routes) ],
    exports:[]
})

export class MyDirectivesRouting{

}