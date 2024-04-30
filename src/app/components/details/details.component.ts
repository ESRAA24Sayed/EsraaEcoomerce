import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EdataService } from 'src/app/shared/services/edata.service';
import { Product } from 'src/app/shared/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule ,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor( private _ActivatedRoute:ActivatedRoute , private _EdataService:EdataService){}

  productDetails:Product={} as Product;

  
  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: false
  }

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(urlPar)=>{
         let idProduct:any=  urlPar.get('id');
         this._EdataService.getDetails(idProduct).subscribe({
          next:(response)=>{

            this.productDetails =response.data;

          }
         })
        }
      })
  }

}
