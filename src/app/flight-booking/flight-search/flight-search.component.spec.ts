import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FlightSearchComponent } from './flight-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlightBookingModule } from '../flight-booking.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FlightBookingModule,
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should load flights when user entered from an to', () => {
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    const httpTestingController: HttpTestingController
      = TestBed.get(HttpTestingController);

    const req = httpTestingController.expectOne(
      'http://www.angular.at/api/flight?from=Graz&to=Hamburg'
    );

    req.flush([{
      id: 30,
      from: 'Graz',
      to: 'Hamburg',
      date: ''
    }]);

    expect(component.flights.length).toBe(1);
  });
});
