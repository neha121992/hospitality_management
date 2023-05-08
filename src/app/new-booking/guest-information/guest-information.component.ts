import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.scss']
})
export class GuestInformationComponent implements OnInit{
 guestsDetails!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.guestsDetails = this.fb.group({
     "totalGuest":[''],
     "guestArr":this.fb.array([])
    })
    this.addGuest();
  }
  guest(){
    return this.fb.group({
      "customerName": "",
      "age":"",
      "gender":"",
    })
  }
  get guestArr(){
    return this.guestsDetails.get("guestArr") as FormArray;
  }

  addGuest(){
    this.guestArr.push(this.guest())
  }
  removeGuest(i:any){
  this.guestArr.removeAt(i);
  }
  saveForm(){
    console.log(this.guestsDetails.value);
  }
}
