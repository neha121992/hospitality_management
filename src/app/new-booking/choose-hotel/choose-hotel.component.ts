import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-choose-hotel',
  templateUrl: './choose-hotel.component.html',
  styleUrls: ['./choose-hotel.component.scss']
})
export class ChooseHotelComponent implements OnInit{
  hotelList:any=[];
  @Input()
  chosenHotelType: any;
  constructor(private http:HttpService){

  }
  ngOnInit(): void {
  this.getHotelData();
  }
  getHotelData(){
    this.http.getDataFromServer("hotelsList","cityName","Chennai").subscribe((el:any)=>{
      this.hotelList = el[0].hotels;
    })
  }

}
