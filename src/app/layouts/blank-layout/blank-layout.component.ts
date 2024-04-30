
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NgModel } from '@angular/forms';







@Component({
    selector: 'app-blank-layout',
    standalone: true,
    templateUrl: './blank-layout.component.html',
    styleUrls: ['./blank-layout.component.scss'],
    imports: [CommonModule, NavBlankComponent, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent]
})
export class BlankLayoutComponent {

}
