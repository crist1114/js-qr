import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private apiURL:string = 'https://codeqr-generate.herokuapp.com/api/code/historial/';
  constructor(private http: HttpClient) { }

  getHistory(idUser:any):Observable<any>{
    return this.http.post(this.apiURL, idUser);
  }
}
