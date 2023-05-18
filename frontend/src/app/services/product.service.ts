import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

import { Category, subcategory } from '../shared/models/Categories';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  PRODUCTS_BY_SEARCH_URL,
  PRODUCTS_BY_SUBCATEGORY_URL,
  PRODUCTS_CATEGORIES_URL,
  PRODUCTS_SUBCATEGORIES_URL,
  PRODUCTS_URL,
  PRODUCT_POST_URL,
} from '../shared/constants/urls';
import { PRODUCTS_BY_CATEGORY_URL } from '../shared/constants/urls';
import { PRODUCTS_BY_ID_URL } from '../shared/constants/urls';
import { MyProduct } from '../shared/interfaces/MyProduct';
import { ToastrService } from 'ngx-toastr';

const PRODUCT_KEY = 'Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSubject = new BehaviorSubject<Product>(
    this.getProductToLocalStorage()
  );
  public productObservable: Observable<Product>;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.productObservable = this.productSubject.asObservable();
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(PRODUCTS_CATEGORIES_URL);
  }
  getAllSubCategories(): Observable<subcategory[]> {
    return this.http.get<subcategory[]>(PRODUCTS_SUBCATEGORIES_URL);
  }

  getAllProductByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_BY_CATEGORY_URL + category);
  }
  getAllProductBySubCategory(subcategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_BY_SUBCATEGORY_URL + subcategory);
  }

  getProductById(productid: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + productid);
  }

  postProduct(myproduct: MyProduct): Observable<Product> {
    return this.http.post<Product>(PRODUCT_POST_URL, myproduct).pipe(
      tap({
        next: (product) => {
          this.setProductToLocalStorage(product);
          this.productSubject.next(product);
          this.toastrService.success(
            `Product Saved Successfully with name:${product.name}`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(
            errorResponse.error,
            'Something Went Wrong!!'
          );
        },
      })
    );
  }

  private setProductToLocalStorage(product: Product) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(product));
  }
  private getProductToLocalStorage(): Product {
    const userJson = localStorage.getItem(PRODUCT_KEY);
    if (userJson) return JSON.parse(userJson) as Product;
    return new Product();
  }
}
