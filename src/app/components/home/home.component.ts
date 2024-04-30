import { Component, NgModule, OnInit, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdataService } from 'src/app/shared/services/edata.service';
import { Product } from 'src/app/shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import { AppModule } from 'src/app/app.module';
import { SearchPipe } from 'src/app/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/wish-list.service';
import { FooterComponent } from '../footer/footer.component';








@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,RouterLink ,CarouselModule , SearchPipe,FormsModule,CartComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

  

       export class HomeComponent implements OnInit {

        searchInput:any;

           slidesStore: any;

        constructor(private _EdataService:EdataService , private _CartService : CartService , private _ToastrService:ToastrService ,
      
          private _WishlistService:WishlistService
           
      
          
          ){}
      
        products:Product[] = []
      
        categories:any[] = []
      
        wishListData:string[] = []
      
      
        searchTerm:string = ''
      
      
      addCart(id:string):void{
      
       this._CartService.addCart(id).subscribe({
       
        next:(response)=> {
               
          console.log(response);
      
          this._ToastrService.success(response.message , 'Fresh Cart')
          
      
        } , 
      
        error:(err)=>{
        
          console.log(err);
          
      
      
        }
      
      
       })
      
      
      }
      
      
        categorySliderOptions: OwlOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          
          autoplay:true ,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 6
            }
          },
          
        }
      
      
        
        mainSlider: OwlOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          autoplay:true ,
          items:1,
          
        }
      
      
      
      
      
        ngOnInit(): void {
      
          this._EdataService.getProducts().subscribe({
           
            next:(response)=> {
             
            this.products = response.data
              
      
      
            }
      
          })
      
          this._EdataService.getCategories().subscribe({
          
            next:(response)=>{
      
                     this.categories = response.data;
                     
      
            }
      
      
          })
      
      
          this._WishlistService.getWishList().subscribe({
            
            next:(response)=>{
      
            
      
             const newData = response.data.map(     (item:any)=> item._id    )
      
      
             console.log('newData' , newData);
      
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
      
                 console.log(response);
      
                 this._ToastrService.success(response.message)
      
                 this.wishListData = response.data
                 
      
            }
      
      
          })
      
      
        }
      
      
      
      }
