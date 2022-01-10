import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowDomRouting } from './shadow-dom.routing';
import { FormsModule } from '@angular/forms';
import { ShadowDomComponent } from './shadow-dom.component';
import { ChildShadowDomComponent } from './child-shadow/child-shadow.component';

@NgModule({
    declarations:[
        ShadowDomComponent,
        ChildShadowDomComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShadowDomRouting
    ],
    exports:[]
})

export class ShadowDomModule{

}