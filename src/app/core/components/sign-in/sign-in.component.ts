import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  isUserLoggedIn:boolean=false;
  userDetails:any
  signInForm!:FormGroup;
  emitAction: any;
  constructor(public dialog:MatDialog, private fb:FormBuilder, private http:HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SignInComponent>
    ){

}  ngOnInit(): void {
  this.initializeForm();
 
  }

  initializeForm(){
    this.signInForm = this.fb.group({
     "userName":[''],
     "password":[''] 
    })
  }

  signSaveForm(){
    console.log(this.signInForm.value);
    const endpoint = "users";
    this.http.getDataFromServerAuthentication(
      endpoint,
      this.signInForm.value?.userName,
      this.signInForm.value?.password
    ).subscribe((el:any)=>{
      const token = "Betyutui678hhj";
       // localStorage.setItem("users",JSON.stringify(el)); // if you dont have token
      this.http.setUserDetails(el);
      this.dialog.closeAll();
    })
    
  }
  close(){
  this.dialogRef.close();
  }

  }



  // getSignInData(){
  //   const endpoint = "users";
  //   this.http.getDataFromServerAuthentication(endpoint,this.signInForm.value?.userName,this.signInForm.value?.password).subscribe((el)=>{
  //     const token = "Betyutui678hhj";
  //     localStorage.setItem("auth-token",token);
  //     localStorage.setItem("userDetails",JSON.stringify(el));
  //   })
  // }
  // signSaveForm(){
  //   console.log(this.signInForm.value);
  //   this.dialogRef.close();
  // }
