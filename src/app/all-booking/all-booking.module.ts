import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBookingRoutingModule } from './all-booking-routing.module';
import { AllBookingComponent } from './all-booking.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    AllBookingComponent
  ],
  imports: [
    CommonModule,
    AllBookingRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AllBookingModule { }
