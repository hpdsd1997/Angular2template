import { EmployeeService } from "./service/employee.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'employee-list',
    templateUrl: 'employee.component.html'

})
export class EmployeeListComponent implements OnInit {
    employees: any[];
    public pages: number[];
    public currentPage: number;
    constructor(private employeeService: EmployeeService, private router: Router, private activatedRouter: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['numberPage'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });

        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log("System error API");
            }
        );
        this.pages = [1, 2, 3, 4, 5];
    }
}