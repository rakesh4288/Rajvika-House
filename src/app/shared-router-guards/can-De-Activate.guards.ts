import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AngularRouterModule } from '../angular-router/angular-router.module';

@Injectable()

export class CanDeactivateGuard implements CanDeactivate<AngularRouterModule>{
    canDeactivate():any {
        return window.confirm("Are you want to leave this page ?");
    }
}