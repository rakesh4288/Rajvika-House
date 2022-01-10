import { NgModule } from '@angular/core';
import { NewFeaturesComponent } from './new-features.component';
import { Routes,RouterModule } from '@angular/router';
const newFeaturesRoutes:Routes = [
    {
        path:'',
        component:NewFeaturesComponent
    }
]

@NgModule({
    declarations:[ NewFeaturesComponent ],
    imports:[RouterModule.forChild(newFeaturesRoutes)],
    exports:[]
})

export class NewFeaturesRouting{

}