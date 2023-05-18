import { Router } from "express";
import {
  sample_categories,
  sample_products,
  sample_subcategories,
} from "../data";
import asyncHandler from "express-async-handler";
import { Product, ProductModel } from "../models/product.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";

const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const productCount = await ProductModel.countDocuments();

    if (productCount > 0) {
      res.send("Seed is Already Done!!");
      return;
    }

    await ProductModel.create(sample_products);
    res.send("Seed Is Done!");
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.send(products);
  })
);

router.get(
  "/search/:searchTerm",
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const products = await ProductModel.find({ name: { $regex: searchRegex } });
    res.send(products);
  })
);

router.get(
  "/categories/",
  asyncHandler(async (req, res) => {
    const categories = await ProductModel.aggregate([
      {
        $unwind: "$category",
      },
      {
        $group: {
          _id: "$category",
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
        },
      },
    ]);

    res.send(categories);
  })
);

router.get(
  "/subcategories/",
  asyncHandler(async (req, res) => {
    const subcategories = await ProductModel.aggregate([
      {
        $unwind: "$subcategory",
      },
      {
        $group: {
          _id: "$subcategory",
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
        },
      },
    ]);
    res.send(subcategories);
  })
);

router.get(
  "/category/:categoryName",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({
      category: req.params.categoryName,
    });
    res.send(products);
  })
);

router.get(
  "/subcategory/:subcategoryName",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({
      subcategory: req.params.subcategoryName,
    });
    res.send(products);
  })
);

router.get(
  "/:productid",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.findById(req.params.productid);
    res.send(products);
  })
);

router.post(
  "/sell-product",
  asyncHandler(async (req, res) => {
    const {
      id,
      name,
      price,
      imageUrl,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      desc,
      category,
      subcategory,
      seller_name,
      seller_email,
      seller_address,
      seller_mobile,
    } = req.body;
    const product = await ProductModel.findOne({ imageUrl });
    if (product) {
      console.log(id);
      res.status(HTTP_BAD_REQUEST).send("Product Id is already available!");
      return;
    }

    const newProduct: Product = {
      id: "",
      name,
      price,
      imageUrl,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      desc,
      category,
      subcategory,
      seller_name,
      seller_email,
      seller_address,
      seller_mobile,
    };

    const dbUser = await ProductModel.create(newProduct);
    res.send(dbUser);
  })
);

export default router;
