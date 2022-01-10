import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CountryService } from '../shared-services/country.service';

@Component({
    selector:'angular-service',
    templateUrl:'./angular-service.component.html',
    providers:[CountryService]
})

export class AngularServiceComponent implements OnInit{
    constructor(private _Location:Location, private _CommonService:CountryService){}
    pageTitle:string = "Angular Services Knowledge !";
    countryList: any;
    countryName: any;
    oneCountryData:any;
    oneCountryBoolean:boolean = false;
    backToPage(){
        this._Location.back();
    }

    ngOnInit(){
        this.getCountryList();
    }

    getCountryList(){
        return this._CommonService.fetchCountryList().subscribe(
            response=>{
                //console.log("_CommonService =", response);
                this.countryList = response;
            },
            error =>{
                console.log("Error: Getting error while connecting to service component");
            }
        );
    }

    getCountryInfo(countryName:any){
        this.countryName = countryName.value;
        console.log("countryName = ", this.countryName);
        return this._CommonService.fetchOneCountryInfo(this.countryName).subscribe(
            res=>{
                //console.log('One Country Data = ', res);
               this.oneCountryBoolean = true;
               this.oneCountryData = res;
               console.log("country Name =",this.oneCountryData[0].name);
               console.log("country Capital =",this.oneCountryData[0].capital);
            },
            error=>{

            }
        )
    }
}