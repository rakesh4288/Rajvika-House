import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularBindingRouting } from './angular-binding.routing';
import { FormsModule } from '@angular/forms'
import { AngularBindingComponent } from './angular-binding.component';

@NgModule({
    declarations:[AngularBindingComponent],
    imports:[
        CommonModule,
        FormsModule,
        AngularBindingRouting
    ],
    exports:[]
})

export class AngularBindingModule{

}