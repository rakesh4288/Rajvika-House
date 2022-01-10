import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';

const pipesRoutes:Routes = [
    {
        path:'',
        component: PipesComponent
    }
]

@NgModule({
    declarations:[
        
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(pipesRoutes)
    ]
})

export class PipesRouting{
}