import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesRouting } from './pipes.routing';
import { SquarePipes } from './square-value.pipes';
import { PipesComponent } from './pipes.component';

@NgModule({
    declarations:[
        PipesComponent,
        SquarePipes
    ],
    imports:[
        CommonModule,
        PipesRouting
    ]
})

export class PipesModules{

}