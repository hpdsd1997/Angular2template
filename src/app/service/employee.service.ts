import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen Van A" },
            { Id: 2, Name: "Nguyen Van B" },
            { Id: 3, Name: "Nguyen Van C" },
            { Id: 4, Name: "Nguyen Van D" },
            { Id: 5, Name: "Nguyen Van E" },
            { Id: 6, Name: "Nguyen Van F" },
            { Id: 7, Name: "Nguyen Van G" }
        ]
        return employees;
    };
}