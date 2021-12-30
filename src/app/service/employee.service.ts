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

    Search(keyword: string): Observable<any[]> {
        return this._http.get<any[]>(this.apiUrl 
            + "?search=" + keyword);
    }

    GetSingle(id: number): Observable<any[]> {
        // const apiUrl_1=`${this.apiUrl}/${id}`;
        return this._http.get<any>(this.apiUrl + '/' + id);

    }

    UpDate(id: number, data: any): Observable<any[]> {
        return this._http.put<any>(this.apiUrl + '/' + id, data);
    }

    Add(data: any): Observable<any[]> {
        return this._http.post<any>(this.apiUrl, data);
    }
    Delete(id: number): Observable<any[]> {
        return this._http.delete<any>(this.apiUrl + '/' + id);
    }
}