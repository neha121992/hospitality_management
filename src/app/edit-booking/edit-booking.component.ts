import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpService } from '../core/service/http.service';


@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit{
  paymentStatus=["paid","unpaid"];
  editBookingDetails!:FormGroup;
  parentForm: any;

  constructor(private fb:FormBuilder, private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private http:HttpService, public dialogRef: MatDialogRef<EditBookingComponent>){
  console.log("data",data)
  }

  ngOnInit(): void {
    this.editBookingDetails = this.fb.group({
    "checkInDate":[''],
    "checkOutDate":[''],
    "payStatus":['']
    })

    this.setBookingDetails();
  }
  setBookingDetails(){
    this.editBookingDetails.get("checkInDate")?.setValue(this.data.searchHotel.checkInDate);
    this.editBookingDetails.get("checkOutDate")?.setValue(this.data.searchHotel.checkOutDate);
    this.editBookingDetails.get("payStatus")?.setValue(this.data.paymentDetails.payStatus);

  }
  update(){
    this.data.searchHotel.checkInDate = this.editBookingDetails.value.checkInDate;
    this.data.searchHotel.checkOutDate = this.editBookingDetails.value.checkOutDate;
    this.data.searchHotel.paymentDetails = this.editBookingDetails.value.paymentDetails;
     let endpoint:string = "hotel-bookings/" + this.data.id;
    this.http.putDataToServer(endpoint,this.data).subscribe((el:any)=>{
    if(el){
      this.dialogRef.close({booking:this.data});
      console.log(el)
    }
    })
 
  }
  close(){
   this.dialogRef.close();
  }
  
   
}
