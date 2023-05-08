import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit{
monthList=["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Septembet", "October", "Nov", "Dec"]
yearList = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];  
paymentForm!:FormGroup;
parentForm!:FormGroup;
paymentStatus=["paid","unpaid"];
@Input()stepper!:MatStepper;

constructor(private fb:FormBuilder, private formContainer:FormGroupDirective, private http:HttpService){

}
ngOnInit(): void {
this.paymentForm = this.fb.group({
  "nameOnCard":[''],
  "debitCardNumber":[''],
  "expirymonth":[''],
  "expiryYear":[''],
  "securityCode":[''],
  "payStatus":['']
})
this.parentForm = this.formContainer.form;
if(this.parentForm){
  this.parentForm.addControl("paymentDetails",this.paymentForm)
}
console.log(this.stepper.next());
}
saveForm(){
  // console.log(this.paymentForm.value);
  console.log(this.parentForm.value);
}
placeOrder(){
  const data = this.parentForm.value;
  this.http.postDataToServer("hotel-bookings", data).subscribe((el:any)=>{
   if(el){
    this.stepper.next();
   }
  },error=>{})
}

}
