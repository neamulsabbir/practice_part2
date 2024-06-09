import productModel from "./productModel";
import userModel from "./userModel";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItems = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: productModel,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});
const shippingAddress = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
});

const orderSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userModel,
      required: true,
    },
    email: {
      type: String,
    },
    items: {
      type: [orderItems],
      require: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    shipping: shippingAddress,
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const OrderModel =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

export default OrderModel;
