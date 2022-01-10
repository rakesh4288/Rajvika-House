import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCRUDComponent  } from './emp-crud.component';

const empRoutes:Routes = [
    {
        path:'',
        component: EmployeeCRUDComponent
    }
]

@NgModule({
    declarations:[
        
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(empRoutes)
    ]
})

export class EmployeeCRUDRouting{
}