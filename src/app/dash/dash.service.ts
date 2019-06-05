import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRequestDash } from './baseRequestDash';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': 'application/json',
    'Content-Type': 'application/json-patch+json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashService {

  servidor = "http://localhost:4200/v1.0/esender"

  constructor(private http: HttpClient) { }


  obterInfoDashboard(baseRequestDash: BaseRequestDash):Observable<BaseRequestDash>{

  
    return this.http.post<BaseRequestDash>(`${this.servidor}/DashBoard/ObterInfoResumo`,baseRequestDash,httpOptions);

  }


}
