import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../service/login.service";
@Injectable()
export class CheckLoginGuard implements CanActivate{
    constructor(private logginService:LoginService){

    }
    canActivate() {
        let status= this.logginService.IsLogged();
        if(status==false){
            alert("you don't have permission access to this page");
        }
        return status;
    }
 

}