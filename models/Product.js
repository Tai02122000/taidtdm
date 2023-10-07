const mongooose = require("mongoose");

const ProductSchema = new mongooose.Schema(
  {
    productId: { type: String, require: true, unique: true },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongooose.model("Product", ProductSchema);
