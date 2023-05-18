import { Product } from './Product';

export class WatchlistItem {
  constructor(public product: Product) {}
  quantity: number = 1;
  price: number = this.product.price;
}
