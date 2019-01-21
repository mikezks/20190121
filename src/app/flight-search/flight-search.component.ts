import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
                          .set('Accept', 'application/json');

    const params = new HttpParams()
                          .set('from', this.from)
                          .set('to', this.to);

    this.http
      .get<Flight[]>(url, { headers, params })
      .subscribe(
        flights => {
          this.flights = flights;
          console.log(flights);
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}