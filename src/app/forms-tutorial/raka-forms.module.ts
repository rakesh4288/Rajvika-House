import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RajvikaFormsRouting } from './raka-forms.routing';
import { RajvikaFormsComponent } from './raka-forms.component';
import { TDF_component } from './TDF/TDF.component';
import { MDF_Component } from './MDF/MDF.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        RajvikaFormsComponent,
        TDF_component,
        MDF_Component
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RajvikaFormsRouting
    ],
    exports: []
})

export class RajvikaFormsModules{

}