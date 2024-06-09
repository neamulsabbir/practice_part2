import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "https://placehold.co/40x40" },
    billing: { type: billingSchema },
    shipping: { type: billingSchema },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
