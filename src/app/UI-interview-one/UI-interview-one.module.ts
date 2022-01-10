import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UI_Interview_One_Routing } from './UI-interview-one.routing';
import { UI_Interview_One_Component } from './UI-interview-one.component';

@NgModule({
    declarations:[
        UI_Interview_One_Component
    ],
    imports:[
        CommonModule,
        UI_Interview_One_Routing
    ],
    exports:[]
})

export class UI_Interview_One_Module{}