import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    activatedRoute: ActivatedRoute
  ) {
    let productsObservable: Observable<Product[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        productsObservable = this.productService.getAllProductsBySearchTerm(
          params.searchTerm
        );
      else if (params.category)
        productsObservable = this.productService.getAllProductByCategory(
          params.category
        );
      else if (params.subcategory)
        productsObservable = this.productService.getAllProductBySubCategory(
          params.subcategory
        );
      else productsObservable = this.productService.getAll();

      productsObservable.subscribe((serverProducts) => {
        this.products = serverProducts;
      });
    });
  }
  ngOnInit(): void {}
}
