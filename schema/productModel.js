import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, index: true },
    image: [{ type: String, required: true }],
    price: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    reviewsNumber: { type: Number, required: true },
    rating: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true, lowercase: true },
    details: Schema.Types.Mixed,
    description: { type: String, required: true },
    size: { type: [String] },
    colors: { type: [String] },
    sku: { type: String, required: true },
    soldCount: { type: Number, required: true },
    quantities: { type: Number, required: true },
  },
  { timestamps: true }
);
const productModel = mongoose.models.Product || model("Product", productSchema);

export default productModel;
