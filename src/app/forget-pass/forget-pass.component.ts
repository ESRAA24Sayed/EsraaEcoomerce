import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpasswordService } from '../forget-pass.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-forget-pass',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgotpasswordComponent {

  constructor( private _ForgotpasswordService:ForgotpasswordService , private _Router:Router ){}

  step1:boolean = true

  step2:boolean = false

  step3:boolean = false

  email:string = ''

  userMsg:string = ''

  forgotForm:FormGroup = new FormGroup({
   
    email:new FormControl('')


  })


  
  resetCodeForm:FormGroup = new FormGroup({
   
    resetCode:new FormControl('')


  })


  
  resetPasswordForm:FormGroup = new FormGroup({
   
    newPassword:new FormControl('')

  })


  forgotPassword():void{
   
    let userEmail = this.forgotForm.value

    this.email = userEmail.email

    this._ForgotpasswordService.forgotPassword(userEmail).subscribe({

     next:(response)=>{
       
      console.log(response);

      this.userMsg = response.message

      this.step1 = false

      this.step2 = true
      


     }, 


     error:(err)=>{
           
      this.userMsg = err.error.message


     }


    })


  }

  resetCode():void{

     let resetCode = this.resetCodeForm.value

    this._ForgotpasswordService.resetCode(resetCode).subscribe({
    
      next:(response)=>{

       this.userMsg = response.status
       
       this.step2 = false

       this.step3 = true

      } , 


      error:(err)=>{

          this.userMsg = err.error.message

      }


    })


  }

  resetPassword():void{
     
    let resetForm = this.resetPasswordForm.value
    
    resetForm.email = this.email
   
    this._ForgotpasswordService.resetPassword(resetForm).subscribe({

     next:(response)=>{
            
      if(response.token){
           
        localStorage.setItem('eToken' ,response.token )

        this._Router.navigate(['/home'])


      }
      

     } , 
     
     
     error:(err)=>{

       this.userMsg = err.error.message

     }


    })

    
  }




}