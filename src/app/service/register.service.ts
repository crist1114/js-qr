import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})

export class RegisterService {


    private apiUrl = 'https://codeqr-generate.herokuapp.com/api/auth/register';

    constructor(private http: HttpClient, private cookieService : CookieService){

    }

    registrar(user:any): Observable<any>{
        return this.http.post(this.apiUrl, user);
    }

}