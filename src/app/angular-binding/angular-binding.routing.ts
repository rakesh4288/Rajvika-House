import { NgModule } from '@angular/core';
import { AngularBindingComponent } from './angular-binding.component';
import { Routes,RouterModule } from '@angular/router';
const bindingRoutes:Routes = [
    {
        path: '',
        component: AngularBindingComponent
    }
]

@NgModule({
    declarations:[  ],
    imports:[RouterModule.forChild(bindingRoutes)],
    exports:[]
})

export class AngularBindingRouting{

}