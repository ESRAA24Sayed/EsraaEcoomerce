
// import { Search } from './shared/interfaces/search';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './shared/interfaces/product';
import { Search } from './shared/interfaces/search';


@Pipe({
  name: 'search',
  standalone:true
})
export class SearchPipe implements PipeTransform {

  transform(products:Search[],searchInput:string): Search[] {
    return products.filter((product)=>{
    return   product.title;
    });
  }
 

}

// .toLowerCase().includes(searchInput.toLowerCase())
