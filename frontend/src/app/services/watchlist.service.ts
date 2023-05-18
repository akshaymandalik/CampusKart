import { Injectable } from '@angular/core';
import { Watchlist } from '../shared/models/watchlist';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product';
import { WatchlistItem } from '../shared/models/watchlistItems';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlist: Watchlist = this.getWatchListFromLocalStorage();
  private watchlistSubject: BehaviorSubject<Watchlist> = new BehaviorSubject(
    this.watchlist
  );

  constructor() {}

  addToWatchList(product: Product): void {
    let watchlistItem = this.watchlist.items.find(
      (item) => item.product.id === product.id
    );
    if (watchlistItem) return;

    this.watchlist.items.push(new WatchlistItem(product));
    this.setWatchListToLocalStorage();
  }

  removeFromWatchList(productId: string): void {
    this.watchlist.items = this.watchlist.items.filter(
      (item) => item.product.id != productId
    );
    this.setWatchListToLocalStorage();
  }

  cleanWatchList() {
    this.watchlist = new Watchlist();
    this.setWatchListToLocalStorage();
  }

  getWatchListObservable(): Observable<Watchlist> {
    return this.watchlistSubject.asObservable();
  }

  private setWatchListToLocalStorage(): void {
    this.watchlist.totalPrice = this.watchlist.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.watchlist.totalCount = this.watchlist.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const watchlistJson = JSON.stringify(this.watchlist);
    localStorage.setItem('watchlist', watchlistJson);
    this.watchlistSubject.next(this.watchlist);
  }

  private getWatchListFromLocalStorage(): Watchlist {
    const watchlistJson = localStorage.getItem('watchlist');
    return watchlistJson ? JSON.parse(watchlistJson) : new Watchlist();
  }
}
