import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from 'src/app/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { EdataService } from 'src/app/shared/services/edata.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/wish-list.service';
import { Product } from 'src/app/shared/interfaces/product';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CarouselModule,SearchPipe,FormsModule,CartComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  searchInput:any;



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
