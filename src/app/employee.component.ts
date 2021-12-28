import { EmployeeService } from "./service/employee.service";
import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'employee-list',
    templateUrl: 'employee.component.html'

})
export class EmployeeListComponent implements OnInit {
    employees: any[];
    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit(): void {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        },
        error=>{
            console.log("System error API");
        }
        );
    }
}