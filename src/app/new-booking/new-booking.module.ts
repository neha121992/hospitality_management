import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { GuestInformationComponent } from './guest-information/guest-information.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { FinishBookingComponent } from './finish-booking/finish-booking.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    NewBookingComponent,
    SearchHotelComponent,
    ChooseHotelComponent,
    ChooseRoomComponent,
    PersonalInformationComponent,
    GuestInformationComponent,
    PaymentDetailsComponent,
    FinishBookingComponent
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class NewBookingModule { }
