import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
@Injectable()
export class EmployeeService {

    private apiUrl = "https://61cafe76194ffe0017788ac5.mockapi.io/api/employees";
    constructor(private _http: HttpClient) {

    }
    GetList(): Observable<any[]> {
        return this._http.get<any[]>(this.apiUrl);

    }
}