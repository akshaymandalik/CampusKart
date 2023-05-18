import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { Category } from 'src/app/shared/models/Categories';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  categories?: Category[];

  constructor(
    activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private watchlistService: WatchlistService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.productService
          .getProductById(params.id)
          .subscribe((serverProduct) => {
            this.product = serverProduct;
          });
    });
  }

  ngOnInit(): void {}

  addToWatchList() {
    this.watchlistService.addToWatchList(this.product);
    this.router.navigateByUrl('/watchlist');
  }
}
