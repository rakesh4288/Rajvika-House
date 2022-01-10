import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCRUDRouting } from './emp-crud.routing';
import { EmployeeCRUDComponent } from './emp-crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        EmployeeCRUDComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        EmployeeCRUDRouting
    ]
})

export class EmployeeCRUDModules{

}