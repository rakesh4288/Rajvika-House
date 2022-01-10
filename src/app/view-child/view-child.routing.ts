import { NgModule } from '@angular/core';
import { ViewChildComponent } from './view-child.component';
import { Routes,RouterModule } from '@angular/router';
const viewRoutes:Routes = [
    {
        path:'',
        component:ViewChildComponent
    }
]

@NgModule({
    declarations:[  ],
    imports:[RouterModule.forChild(viewRoutes)],
    exports:[]
})

export class ViewChildRouting{

}