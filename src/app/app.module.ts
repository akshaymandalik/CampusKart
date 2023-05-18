import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellProductComponent } from './Components/sell-product/sell-product.component';
import { HomeComponent } from './Components/home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { RegisterComponent } from './Components/register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: "sell-product",
    component:SellProductComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "register",
    component:RegisterComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    SellProductComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
