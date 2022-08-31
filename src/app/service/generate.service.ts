import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  private apiUrl ='https://codeqr-generate.herokuapp.com/api/code/';
  constructor( private http: HttpClient) {}

  get_generar_qr(generate:any ): Observable<any>{
    return this.http.post(this.apiUrl,generate);
  }
    

}

