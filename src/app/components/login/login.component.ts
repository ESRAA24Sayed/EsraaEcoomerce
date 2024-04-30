import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router , private _FormBuilder:FormBuilder) {}

  msgErr:string='' ;
  isLoad:boolean=false;

  //  loginForm:FormGroup= new FormGroup({
    
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required ]),
  
  //  })

  loginForm :FormGroup= this._FormBuilder.group({
    email:[null, [Validators.required,Validators.email]],
    password:[null ,[Validators.required ]]
  })

   clickForm(): void{

  if(this.loginForm.valid)
  {


    this.isLoad=true;

    this._AuthServiceService.setLogin(this.loginForm.value).subscribe({
      next:(response)=>{

       

        if(response.message == 'success'){
          this.isLoad=false;

          localStorage.setItem('etoken',response.token);

          this._AuthServiceService.decodeUserData();

          this._Router.navigate(['/home']);
        }
  
      },
      error:(err:HttpErrorResponse)=>{

        this.isLoad=false;

        this.msgErr= err.error.message
      }
     })
  }

  else{
    this.loginForm.markAllAsTouched()
  }
      
    } 
    
}
