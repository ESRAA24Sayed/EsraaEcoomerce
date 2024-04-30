import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
 



  constructor(private _HttpClient:HttpClient){}

 headers:any={token:localStorage.getItem('etoken')};
userOrders:any=jwtDecode(localStorage.getItem('etoken')!)


 getUserOrders():Observable<any>{

  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${this.userOrders.id}`)
 
 
 
   }

  addCart(productId:string):Observable<any>{

   

   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:productId},{
    headers:this.headers
   })
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart' ,{
      headers:this.headers
    }
    )
  }


  removeItem(removeId:string):Observable<any>{
   return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${removeId}`,
   {
    headers:this.headers
   }
    )


  }

  updateCart(updateId:string , newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${updateId}`,
    {
     count:newCount
    },
    {
      headers:this.headers
    }
     )
 
 
   }

   checkOut(cartId:string , userData:object):Observable<any>{

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://esraa24sayed.github.io/Ecommerce' , 
    
    {
     shippingAddress: userData
         
     }
    
    )
 
   }
}
 
