import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class CommonService{
    constructor(private _HttpClient:HttpClient){}
    bsValue:any = "Kia Sonet";
    carName = new BehaviorSubject(this.bsValue);
    fetchUserList(){
        let _url:string = "https://reqres.in/api/users";
        return this._HttpClient.get(_url);
    }
}