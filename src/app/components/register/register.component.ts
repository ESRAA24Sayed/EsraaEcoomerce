import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';







@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router) {}

  msgErr:string='' ;
  isLoad:boolean=false;

   registerForm:FormGroup= new FormGroup({
    name: new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required ]),
    rePassword: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required])

   })

   clickForm(): void{

  if(this.registerForm.valid)
  {


    this.isLoad=true;

    this._AuthServiceService.setRegister(this.registerForm.value).subscribe({
      next:(response)=>{

        this.isLoad=false;

        if(response.message == 'success'){
          this._Router.navigate(['/login']);
        }
  
      },
      error:(err:HttpErrorResponse)=>{

        this.isLoad=false;

        this.msgErr= err.error.message
      }
     })
  }


  else{
    this.registerForm.markAllAsTouched()
  }
      
    } 
    
    
    
   }

