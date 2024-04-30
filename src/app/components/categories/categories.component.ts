import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdataService } from 'src/app/shared/services/edata.service';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _EdataService:EdataService){}

  categories:any[]=[]


 ngOnInit(): void {
      
  this._EdataService.getCategories().subscribe({

  next:(response)=>{
    
   console.log(response);

   this.categories = response.data
   


  }

  })

 }


}