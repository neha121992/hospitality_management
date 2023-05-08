import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../core/service/http.service';
import { EditBookingComponent } from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent implements OnInit{
  hotelArr:any;
  dataSource:any;
  displayedColumns:any=['select','customerName', 'checkInDate', 'mobNo','roomType','payStatus']
  constructor(private http:HttpService, private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.http.getDataFromServer("hotel-bookings","","").subscribe((el:any)=>{
      this.hotelArr = el;
      this.dataSource = new MatTableDataSource(el);


    },error=>{

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(booking:any){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "600px";
    dialogConfig.data = booking;
    const dialogRef = this.dialog.open(EditBookingComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result=>{
      console.log("data received from dialogcomp", result)
    })
  }

}
