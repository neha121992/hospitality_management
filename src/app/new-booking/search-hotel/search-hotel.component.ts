import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
 
  searchHotel!: FormGroup;
  parentForm!: FormGroup;
  cityName: any= [];
  filteredOptions!: Observable<string[]>;
  constructor(private fb: FormBuilder, private formContainer: FormGroupDirective, private http:HttpService) {

  }
  ngOnInit(): void {
    this.createForm();
    this.parentForm = this.formContainer.form;
    if (this.parentForm) {
      this.parentForm.addControl("searchHotel", this.searchHotel);
    }
    {
      this.filteredOptions = this.searchHotel.controls["city"].valueChanges.pipe(
      );
    }
    this.getCityName();
  }

  createForm() {
    this.searchHotel = this.fb.group({
      "city": [''],
      "checkInDate": [''],
      "checkOutDate": [''],
      "adults": [1],
      "children": [1]
    })
  }


  saveForm() {
    console.log(this.searchHotel.value);
    console.log(this.parentForm.value);
  }

  getCityName(){
  this.http.getDataFromServer("hotelsList", "" , "").subscribe((el)=>{
    if(el){
      this.cityName = el;
    
    }
  })
  }
  adultsChange(type:string){
   if(type == 'increment'){
    this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value +1);
   }else{
    this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value -1);

   }
  }
  childrenChange(type:string){
    if(type == 'increment'){
    this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value +1);
    }else{
      this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value -1);

    }
  }
}
