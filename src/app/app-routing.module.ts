import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
// import { CommonModule } from '@angular/common';
// import { NgModule, PipeTransform } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [

//   {path:'blank' ,loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
//     children:[
//       {path:'',redirectTo:'home',pathMatch:'full'},
//       {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'home' },
//       {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'cart'},
//       {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'products'},
//       {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
//       {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'brands'},

      
 
// ]
// }
// ,


// {path:'auth' ,loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
//     children:[
//       {path:'',redirectTo:'login',pathMatch:'full'},
//       {path:'login' ,loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'login'},
//       {path:'register' ,loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'register'},

// ]
// },
   
// {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'NotFound'}

// ];

// @NgModule({
//   // imports: [RouterModule.forRoot(routes),CommonModule],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes),
//      ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'blank',
//     loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
//     children: [
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//       { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), data: { title: 'Home' } },
//       { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent), data: { title: 'Cart' } },
//       { path: 'products', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent), data: { title: 'Products' } },
//       { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent), data: { title: 'Categories' } },
//       { path: 'brands', loadComponent: () => import('./components/brands/brands.component').then(m => m.BrandsComponent), data: { title: 'Brands' } },
//     ]
//   },
//   {
//     path: 'auth',
//     loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
//     children: [
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent), data: { title: 'Login' } },
//       { path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent), data: { title: 'Register' } },
//     ]
//   },
//   { path: '**', loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent), data: { title: 'Not Found' } }
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './all-orders/all-orders.component';
import { ForgotpasswordComponent } from './forget-pass/forget-pass.component';




const routes: Routes = [
  { path:'',
  canActivate:[authGuard] ,
  component:BlankLayoutComponent ,
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'brands',component:BrandsComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'details/:id' ,component:DetailsComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    {path:'allOrders', component:AllordersComponent},
    {path:'forget-pass',component:ForgotpasswordComponent}
  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forget',component:ForgotpasswordComponent}
  ]},

  {path:'**',component:NotfoundComponent}


 

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
