import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, interval } from 'rxjs';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy{
  registerForm!:FormGroup;
  isEntertOtp:boolean=false;
  sub!:Subscription;
  otpCounterNum=0;
  otpGenerated!:number;
  
 constructor(private dialog:MatDialog, private fb:FormBuilder, private http:HttpService){
  const emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.registerForm = this.fb.group({
      "userName":['',[Validators.required] ],
      "email" :['',[Validators.required]],
      "mobileNo":['',[Validators.required]],
      "password":['',[Validators.required]],
      "confirmpassword":['',[passwordValidators]],

    });
    // this.registerForm.valueChanges.subscribe(data=>{
    //   if(data.password!=data.confirmpassword){
    //     this.registerForm.controls['confirmpassword']?.setErrors({passwordNotMatching:true})
    //   }
    // })
    function passwordValidators(control:AbstractControl):ValidationErrors | null{
      const confirmpassword = control.value;
      const password = control.root.value.password;
      if(password!=confirmpassword){
        return{isPasswordMismatch:true}
      }else{
        return null;
      }
    }

  }

  saveRegisterForm(){
   this.http.postDataToServer("users",this.registerForm.value).subscribe((el:any)=>{
   })

  //  this.dialog.closeAll();
  console.log(this.registerForm.value);
  }
  get password(){
  return this.registerForm.controls['password'];
  }
    get confirmpassword(){
    return this.registerForm.controls['confirmpassword'];
    }

    getOtp(){
      this.isEntertOtp = true;
      this.otpGenerated = Math.floor(1000+Math.random()*9000);
      console.log(this.otpGenerated);
      this.sub = interval(1000).subscribe((el:number)=>{
        this.otpCounterNum=60-el;
        if(this.otpCounterNum ===0){
          this.sub.unsubscribe();
        }
      })

    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }


  }



 
  
  



