import { Component, OnInit } from '@angular/core';

import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
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
