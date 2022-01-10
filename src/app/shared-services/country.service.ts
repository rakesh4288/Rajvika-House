import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class CountryService{
    constructor(private _HttpClient:HttpClient){}
    // https://restcountries.eu/rest/v2/all
    // http://restcountries.eu/rest/v2/name/Angola

    fetchCountryList(){
        let _url:string ="https://restcountries.eu/rest/v2/all";
        return this._HttpClient.get(_url);
    }

    fetchOneCountryInfo(countryName:any){
        console.log('Service File countryName =', countryName);
        let _url:string = 'http://restcountries.eu/rest/v2/name/' + countryName;
        return this._HttpClient.get(_url);
    }
}