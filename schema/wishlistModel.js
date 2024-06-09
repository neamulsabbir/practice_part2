import mongoose from "mongoose";
import productModel from "./productModel";
import userModel from "./userModel";

const wishlistSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: productModel,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userModel,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
