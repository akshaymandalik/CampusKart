import { Schema, model } from "mongoose";

export interface WatchListItem {
  id: string;
  userId: string;
  productId: string;
}

const WatchListItemSchema = new Schema<WatchListItem>(
  {
    id: { type: String, required: true },
    userId: { type: String, required: true },
    productId: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const WatchListItemModel = model<WatchListItem>(
  "WatchListItem",
  WatchListItemSchema
);
