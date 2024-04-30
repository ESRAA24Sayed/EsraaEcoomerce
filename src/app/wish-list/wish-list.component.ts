import { CarouselModule } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wish-list.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BuyPipe } from '../buy.pipe';
import { FooterComponent } from '../components/footer/footer.component';



@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,CarouselModule,BuyPipe ],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishlistComponent implements OnInit {
 
  constructor( private _WishlistService:WishlistService , private _ToastrService:ToastrService , private _CartService:CartService){} 
 
  products:any[] = []
 
  wishListData:string[] = []
 
 
 
  ngOnInit(): void {
       
   this._WishlistService.getWishList().subscribe({
     
     next:(response)=>{
        

 
       this.products = response.data
 
       
       const newData = response.data.map(     (item:any)=> item._id    )
 
       this.wishListData = newData
       
 
     }
 
 
   })
 
  }
 
 
 
 
  
  addFav(prodId:string):void
   
  {
 
   this._WishlistService.addToWishList(prodId).subscribe({
 
    next:(response)=>{
        
     
 
      this._ToastrService.success(response.message)
 
      this.wishListData = response.data
 
      
      
 
 
    }
 
   })
 
 
  }
 
 
  removeFav(prodId:string):void{
   
    this._WishlistService.removeWishList(prodId).subscribe({
     
 
      next:(response)=>{
 
        
 
           this._ToastrService.success(response.message)
 
           this.wishListData = response.data
 
           const newProductsData = this.products.filter(   (item)=> this.wishListData.includes(item._id)  )
 
           
         this.products = newProductsData          
 
           
      }
 
 
    })
 
 
  }
 
 
 
 
 
  
 addCart(id:string):void{
 
   this._CartService.addCart(id).subscribe({
   
    next:(response)=> {
           
     
  
      this._ToastrService.success(response.message , 'Fresh Cart')
      
  
    } , 
  
    error:(err)=>{
    
      console.log(err);
      
  
  
    }
  
  
   })
  
  
  }
 
 
 
 }