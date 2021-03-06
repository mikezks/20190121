import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
                          .set('Accept', 'application/json');

    const params = new HttpParams()
                          .set('from', from)
                          .set('to', to);

    return this.http
      .get<Flight[]>(url, { headers, params });
  }
}
