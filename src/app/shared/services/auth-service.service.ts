import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root' 

})

export class AuthServiceService {

 


  constructor(private _HttpClient:HttpClient , private _Router:Router) {}

  userData:any;

  logOutUser():void{
    localStorage.removeItem('etoken');

    this._Router.navigate(['/login']);
  }

  decodeUserData(){
    if(localStorage.getItem('etoken') != null){

       let encode:any=localStorage.getItem('etoken');

        let decode=jwtDecode(encode)

        this.userData=decode;

    }
  }

  setRegister(userData:object):Observable< any>
  {

     return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup ' , userData)
  }

  setLogin(userData:object):Observable< any>
  {

     return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin ' , userData)
  }
}
