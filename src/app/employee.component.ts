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
    public keyword:string;
    constructor(private employeeService: EmployeeService, private router: Router, private activatedRouter: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['numberPage'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Delete(id:number){
        let confirmResult=confirm("Are you sure to delete employee");
        if(confirmResult){
            this.employeeService.Delete(id).subscribe(response=>{
                if(response){
                    alert("Xóa thành công");
                    this.LoadData();}
            })
        }
    }
    LoadData(){
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;},
            error => {
                console.log("System error API");
            }
        );
    }
    Search(){
        this.employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log("System error API");
            }
        );
    }
}