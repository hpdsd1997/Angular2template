import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
    selector: 'employee-overview-component',
    template: '<h3>Overview employees</h3>'

})
export class EmployeeOverviewComponent 
implements OnInit,OnDestroy{
    public parentRouterId:number;
    public sub:Subscription;

    constructor(private router:Router,
        private activedRoute:ActivatedRoute){

    }
    ngOnDestroy(): void {
       
    }
    ngOnInit(): void {
    this.sub=this.activedRoute.parent.params.
    subscribe(
    params=>{ this.parentRouterId=params['id'];
    alert('child get id: '+ this.parentRouterId);
    });
    }

   
}