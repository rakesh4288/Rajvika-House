import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularRouterComponent } from './angular-router.component';

const papaRoutes:Routes = [
    {
        path:'',
        component: AngularRouterComponent
    }
];
@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(papaRoutes)
    ],
    exports:[]
})

export class AngularRouting{

}