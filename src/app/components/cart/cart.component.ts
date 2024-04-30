import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,HomeComponent,RouterLink,RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

constructor( private _CartService:CartService){}

cartDetails:any={};

removeCart(id:string):void{
  this._CartService.removeItem(id).subscribe({
    next:(response)=>{
      this.cartDetails=response.data

      
      

    },

    error:(err)=>{}
  })
}

ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cartDetails=response.data

        
        

      },

      error:(err)=>{}
    })
}
  change(id:string , count:number):void{
  if(count > 0){
    this._CartService.updateCart(id,count).subscribe({
      next:(response)=>{
        this.cartDetails=response.data
  
        
        
  
      },
  
      error:(err)=>{}
    })
  }

  }
}

