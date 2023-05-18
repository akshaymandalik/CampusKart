import { Schema, model } from "mongoose";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  desc: string;
  category: string[];
  subcategory: string[];
  seller_name: string;
  seller_mobile: number;
  seller_address: string;
  seller_email: string;
}

export const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    imageUrl1: { type: String, required: true },
    imageUrl2: { type: String, required: true },
    imageUrl3: { type: String, required: true },
    desc: { type: String, required: true },
    category: { type: [String], required: true },
    subcategory: { type: [String], required: true },
    seller_name: { type: String, required: true },
    seller_mobile: { type: Number, required: true },
    seller_address: { type: String, required: true },
    seller_email: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const ProductModel = model<Product>("product", ProductSchema);
