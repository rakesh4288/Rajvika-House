import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildRouting } from './view-child.routing';
import { FormsModule } from '@angular/forms'
import { ViewChildComponent } from './view-child.component';
import { SampleDirectives } from './sample.directives';
import { NumberComponent } from './number.component';

@NgModule({
    declarations:[
        ViewChildComponent,
        SampleDirectives,
        NumberComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ViewChildRouting
    ],
    exports:[]
})

export class ViewChildModule{

}