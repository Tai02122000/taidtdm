const Food = require("../../models/Food");
const { upload } = require("../routes/uploadImage");
const router = require("express").Router();

router.post("/", upload.any(), async (req, res) => {
  const { name, description, ingredients, spicy, vegetarian, price } = req.body;
  const parameters = {
    name,
    description,
    ingredients,
    spicy,
    vegetarian,
    price,
    image: req.products + req.get("host") + "/file/" + req.files?.[0].filename,
  };

  const newFood = new Food(parameters);
  try {
    const saveFood = await newFood.save();
    res.status(200).json(saveFood);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Food.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Food.findByIdAndDelete(res.params.id);
    res.status(200).json("Successfully");
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const products = await Food.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
router.get("/search/:param", async (req, res) => {
  const { param } = req.params;
  try {
    const products = await Food.find();
    const result = products.filter(
      (e) =>
        e.name.toLowerCase().includes(param.toLowerCase()) ||
        e.price.toString().includes(param)
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/:limit", async (req, res) => {
  try {
    const products = await Food.find()
      .sort({ createdAt: -1 })
      .limit(req.params.limit);
    res.status(200).json(products);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
module.exports = router;
