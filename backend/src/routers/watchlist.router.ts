import { Router } from "express";
import asyncHandler from "express-async-handler";
import { WatchListItemModel, WatchListItem } from "../models/watchlist.model";

const router = Router();

router.post(
  "/addwatchlist",
  asyncHandler(async (req, res) => {
    const { userId, productId } = req.body;

    // Check if the watchlist item already exists
    const existingWatchListItem = await WatchListItemModel.findOne({
      userId,
      productId,
    });

    if (existingWatchListItem) {
      res.status(400).send("Watchlist item already exists");
      return;
    }

    // Create a new watchlist item
    const watchlistItem: WatchListItem = {
      id: "",
      userId,
      productId,
    };
    const createdWatchListItem = await WatchListItemModel.create(watchlistItem);
    res.send(createdWatchListItem);
  })
);

export default router;
