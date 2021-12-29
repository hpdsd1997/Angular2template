import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeDetailComponent } from "../employee-detail.component";

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent>{
    canDeactivate(component:EmployeeDetailComponent) {
        alert("You cannot leave this page without saving data");
        return false;
    }

}