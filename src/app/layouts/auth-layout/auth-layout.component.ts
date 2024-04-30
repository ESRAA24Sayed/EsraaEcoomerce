import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavAuthComponent } from 'src/app/components/nav-auth/nav-auth.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule,NavAuthComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

}
