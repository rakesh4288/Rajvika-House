


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'squareValue'
})

export class SquarePipes implements PipeTransform{
    transform(value:any):any{
        return value * value
    }
}