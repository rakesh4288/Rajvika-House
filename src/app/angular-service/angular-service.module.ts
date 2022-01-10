import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularServiceComponent } from './angular-service.component';
import { AngularServiceRouting } from './angular-service.routing';
import { BehaviourSubjectOne } from './BS-one/BS-one.component';
import {BehaviourSubjectTwo } from './BS-two/BS-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[ 
        AngularServiceComponent,
        BehaviourSubjectOne, 
        BehaviourSubjectTwo
    ],
    imports:[
        CommonModule,
        FormsModule,
        AngularServiceRouting
    ],
    exports:[]
})

export class AngularServiceModule{

}