import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit{
  personalInfoForm!:FormGroup;
  parentForm!:FormGroup;
  countryList=[
    {value:"", viewValue:"Select"},
    {value:"US", viewValue:"United States"},
    {value:"India", viewValue:"India"},
    {value:"UK", viewValue:"United Kingdom"}
  ];
  constructor(private fb:FormBuilder, private formContainer:FormGroupDirective,private http:HttpService){
  
  }
  ngOnInit(): void {
  this.personalInfoForm= this.fb.group({
    "customerName":[''],
    "countryName":[''],
    "mobNo":[''],
    "dob":[''],
    "age":[''],
    "gender":['']
  })
  this.parentForm = this.formContainer.form;
  if(this.parentForm){
    this.parentForm.addControl("personalInfo",this.personalInfoForm);
  }
  }
  saveForm(){
    console.log(this.personalInfoForm.value)
    console.log(this.parentForm.value)
  }

  saveDataToServer(){
    this.http.postDataToServer("users",this.personalInfoForm.value).subscribe((el:any)=>{
    })
  }
}

