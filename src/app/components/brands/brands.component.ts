import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdataService } from 'src/app/shared/services/edata.service';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor( private _EdataService:EdataService ){}

 

  brands:any[]=[]

  ngOnInit(): void {
      
    this._EdataService.getBrands().subscribe({
    

      next:(response)=>{

           console.log(response);

           this.brands = response.data


           

      }


    })


  }

}