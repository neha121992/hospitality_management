import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit{
  parentForm = this._formBuilder.group({

  })
  isLinear1 = true;
  hotelType = "Premium suite";
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  }

  bookHotel(){
    console.log(this.parentForm.value);
  }
}
