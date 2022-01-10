import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { MDF_Component } from './MDF/MDF.component';
import { RajvikaFormsComponent } from './raka-forms.component';
import { TDF_component } from './TDF/TDF.component';

const FormsRoutes:Routes = [
    {
        path:'',
        component: RajvikaFormsComponent
    },
    {
        path:'template-driven-forms',
        component: TDF_component
    },
    {
        path:'model-driven-form',
        component: MDF_Component
    }
];

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(FormsRoutes)
    ],
    exports:[]
})

export class RajvikaFormsRouting{

}