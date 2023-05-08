import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {
 
  baseUrl = "http://localhost:3000/";
  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set("content-type","application/json")
  constructor(private http:HttpClient) { }
  ngOnInit(): void {

  }

  getDataFromServer(endpoint:any, key:string, value:string){
  const url = this.baseUrl + endpoint;
  let queryparam = new HttpParams().set(key,value);
  return this.http.get(url, {'headers':this.httpHeaders, params:queryparam});
  }
  postDataToServer(endpoint:string,data:any){
    const url = this.baseUrl + endpoint;
    return this.http.post(url,data);
  }
  putDataToServer(endpoint:string,data:any){
    const url = this.baseUrl + endpoint;
    return this.http.put(url,data);
  }

  getDataFromServerAuthentication(endpoint:any,userName:any,password:string){
  const url = this.baseUrl + endpoint;
  let queryparam1 = new HttpParams().set("userName",userName).set("password",password);
  return this.http.get(url,{'headers':this.httpHeaders,params: queryparam1});
  }

  _userDetails: any;
  setUserDetails(data: any) {
    this._userDetails = data;
  }
  getUserDetails() {
    return this._userDetails;
  }

  // getUserDetailsFromLocalStorage(users:any){
  //   let userData : any;
  //   userData =localStorage.getItem("users");
  //   if(userData){
  //     userData = JSON.parse(userData);
  //   }
  //   return userData.find( (p:any) => p.userName === users.userName && p.password===users.password)
  // }
}
