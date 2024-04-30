import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';


@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule ,RouterLink,RouterLinkActive ],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent {

  constructor(private _AuthServiceService:AuthServiceService){}

  logOut():void{
     
    this._AuthServiceService.logOutUser()
  }

}
