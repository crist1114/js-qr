import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
   
    private apiUrl = 'https://codeqr-generate.herokuapp.com/api/auth/login';

    constructor(private http: HttpClient, private cookies: CookieService) { 
  
    }
  
    login(user: any):Observable<any>{
      return this.http.post(this.apiUrl, user);
    }
  
  }