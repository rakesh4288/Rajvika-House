import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularServiceComponent } from './angular-service.component';

const servicesRoutes:Routes = [
    {
        path:'',
        component:AngularServiceComponent
    }
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(servicesRoutes) ],
    exports:[]
})

export class AngularServiceRouting{

}