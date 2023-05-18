import { Component, OnInit } from '@angular/core';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { Watchlist } from 'src/app/shared/models/watchlist';
import { WatchlistItem } from 'src/app/shared/models/watchlistItems';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  watchlist!: Watchlist;
  constructor(private watchlistService: WatchlistService) {
    this.watchlistService.getWatchListObservable().subscribe((watchlist) => {
      this.watchlist = watchlist;
    });
  }
  ngOnInit(): void {}

  removeFromWatchList(watchListItem: WatchlistItem) {
    this.watchlistService.removeFromWatchList(watchListItem.product.id);
  }
}
