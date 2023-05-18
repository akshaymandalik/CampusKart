import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellProductComponent } from './Components/sell-product/sell-product.component';
import { HomeComponent } from './Components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { SearchComponent } from './Components/partials/search/search.component';
import { CategoriesComponent } from './Components/partials/categories/categories.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { HeaderComponent } from './Components/partials/header/header.component';
import { AllSubCategoriesComponent } from './Components/all-sub-categories/all-sub-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './Components/partials/footer/footer.component';
import { WatchlistPageComponent } from './Components/watchlist-page/watchlist-page.component';
import { TitleComponent } from './Components/partials/title/title.component';
import { NotFoundComponent } from './Components/partials/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterPageComponent } from './Components/registerpage/registerpage.component';
import { AuthGuard } from './Auth/Gaurd/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sell-product',
    component: SellProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent,
  },
  {
    path: 'category/:category',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-sub-categories',
    component: AllSubCategoriesComponent,
  },
  {
    path: 'subcategory/:subcategory',
    component: HomeComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SellProductComponent,
    HomeComponent,
    SigninComponent,
    SearchComponent,
    CategoriesComponent,
    ProductPageComponent,
    HeaderComponent,
    AllSubCategoriesComponent,
    FooterComponent,
    WatchlistPageComponent,
    TitleComponent,
    NotFoundComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
