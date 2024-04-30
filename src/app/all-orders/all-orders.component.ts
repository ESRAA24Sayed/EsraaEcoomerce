import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { CartService } from '../shared/services/cart.service';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllordersComponent implements OnInit {
  

  constructor( private _CartService:CartService){}

 
  data!:any[]

  ngOnInit(): void {
       

   this._CartService.getUserOrders().subscribe({
    
    next:(response: any[])=>{


      this.data = response
      

    }


   }) 



  }

}