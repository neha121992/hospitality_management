import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.component.html',
  styleUrls: ['./choose-room.component.scss']
})
export class ChooseRoomComponent implements OnInit{
  parentForm!:FormGroup;
  roomDetails!:FormGroup;
constructor(private formContainer:FormGroupDirective, private fb:FormBuilder){

}

  ngOnInit(): void {
   this.roomDetails = this.fb.group({
   "roomType":["delux"],
   "roomDescription":[""],
   })


    this.parentForm = this.formContainer.form;
    if(this.parentForm){
      this.parentForm.addControl("roomDetails",this.roomDetails);
    }
  }




}
