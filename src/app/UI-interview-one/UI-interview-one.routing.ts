import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UI_Interview_One_Component } from './UI-interview-one.component';

const UI_Routing_one: Routes = [
    {
        path: '',
        component: UI_Interview_One_Component
    }
]

@NgModule({
    declarations:[
        //UI_Interview_One_Component
    ],
    imports:[
        RouterModule.forChild(UI_Routing_one)
    ],
    exports:[]
})

export class UI_Interview_One_Routing{

}