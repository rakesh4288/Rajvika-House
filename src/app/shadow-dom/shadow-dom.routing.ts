import { NgModule } from '@angular/core';
import { ShadowDomComponent } from './shadow-dom.component';
import { Routes,RouterModule } from '@angular/router';
const bindingRoutes:Routes = [
    {
        path:'',
        component:ShadowDomComponent
    }
]

@NgModule({
    declarations:[  ],
    imports:[RouterModule.forChild(bindingRoutes)],
    exports:[]
})

export class ShadowDomRouting{

}