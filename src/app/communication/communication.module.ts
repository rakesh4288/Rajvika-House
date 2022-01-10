import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationRouting } from './communication.routing';
import { ParentComponent } from './parent/parent';
import { CommunicationComponent } from './communication';
import { ChildComponent } from './child/child';

@NgModule({
    declarations:[
        CommunicationComponent,
        ParentComponent,
        ChildComponent
    ],
    imports:[
        CommonModule,
        CommunicationRouting
    ],
    exports:[],
    bootstrap:[]
})

export class CommunicationModule{

}