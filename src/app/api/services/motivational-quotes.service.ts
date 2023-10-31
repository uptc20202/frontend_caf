import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MotivationalQuotesService {

  private apiUrl = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) {}

  getMotivationalQuote(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
