import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication';

const comRoutes:Routes = [
    {
        path:'',
        component:CommunicationComponent
    }
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(comRoutes) ],
    exports:[],
    bootstrap:[]
})

export class CommunicationRouting{

}