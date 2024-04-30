import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})


export class CheckoutComponent implements OnInit {

  constructor( private _FormBuilder : FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService: CartService ){}

  checkout:FormGroup=this._FormBuilder.group({
      
    details:[''] ,

    phone:[''] , 

    city:['']


  })


  cartId:any = ''

ngOnInit(): void {
      
  this._ActivatedRoute.paramMap.subscribe({
   
  next:(parmas)=>{
      
   this.cartId = parmas.get('id')
    


  }



  })
}



  handleForm():void{

    console.log(this.checkout.value);

    this._CartService.checkOut(this.cartId , this.checkout.value ).subscribe({

         next:(response)=>{
             
          if(response.status == 'success'){

           window.open(response.session.url , '_self')

          }
          


         }

    })
    
  }

}