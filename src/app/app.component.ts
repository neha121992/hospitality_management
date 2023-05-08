import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from './core/components/register/register.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { HttpService } from './core/service/http.service';
import { Observable, Subscription, interval, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-hotel-booking-app';
  showFiller = false;
  loginPerson:any;
 constructor(private dialog:MatDialog, private http:HttpService){

  }

  ngOnInit(): void {


    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('promise is working1')
        resolve('promise is working2')
        resolve('promise is working3')
        resolve('promise is working4')

        // console.log("promise is working");
      })
    })
    promise.then(res=>console.log(res));


  const observable = new Observable(sub=>{
   setTimeout(()=>{
    sub.next('observable is working5');
    sub.next('observable is working6');
    sub.next('observable is working7');
    sub.next('observable is working8');

    // console.log("promise is working");

   })
  })
  observable.subscribe(res=>console.log(res));

  
  }
 
  openDialog1(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
   const regDialog = this.dialog.open(RegisterComponent, dialogConfig);
   
  }
  openDialog2(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    const signInDialog = this.dialog.open(SignInComponent, dialogConfig);
    signInDialog.afterClosed().subscribe(() => {
      this.loginPerson = this.http.getUserDetails()[0].userName;
    })
  }
 

  
  
}
