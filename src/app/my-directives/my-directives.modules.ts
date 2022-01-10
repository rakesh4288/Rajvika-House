import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectivesRouting } from './my-directives.routing';
import { MyDirectivesComponent } from './my-directives.component';
import { FormsModule } from '@angular/forms';
import { MyCustomDirectives } from './custom-directives';

@NgModule({
    declarations:[ 
        MyDirectivesComponent,
        MyCustomDirectives
    ],
    imports:[ 
        CommonModule,
        FormsModule,
        MyDirectivesRouting
     ],
    exports:[]
})

export class MyDirectivesModules{

}