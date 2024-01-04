import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://api.kanye.rest";

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}
