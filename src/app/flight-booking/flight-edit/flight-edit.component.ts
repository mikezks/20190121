import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { validateCity } from '../../shared/validators/city-validators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [1],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          validateCity([
            'Graz',
            'Madrid'
          ])
        ]
      ],
      to: [],
      date: []
    });

    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);

    this.editForm.valueChanges
      .subscribe(form =>
        console.log('form values', form)
      );
  }

}
