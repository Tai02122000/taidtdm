const mongooose = require("mongoose");

const FoodSchema = new mongooose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    ingredients: { type: Array },
    spicy: { type: String, require: true },
    vegetarian: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongooose.model("Food", FoodSchema);
