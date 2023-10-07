const { default: axios } = require("axios");

/**
 * GET/
 * Homepage
 */
const homepage = async (req, res) => {
  console.log(req.protocol);
  try {
    const newsAPI = await axios.get(`${req.get("host")}/api/product/6`);
    res.render("index", { food: newsAPI.data });
  } catch (err) {
    res.render("index", { food: null });
  }
};
const productsPage = async (req, res) => {
  try {
    const { search } = req.params;
    if (search) {
      const result = await axios.get(
        `${req.get("host")}/api/product/search/${search}`
      );
      res.render("products/index", { food: result.data });
    } else {
      const result = await axios.get(`${req.get("host")}/api/product`);
      res.render("products/index", { food: result.data });
    }
  } catch (err) {
    res.render("products/index", { food: null });
  }
};
const addproducts = async (req, res) => {
  try {
    const newsAPI = await axios.get(`${req.get("host")}/api/product`);
    res.render("manage/product", { food: newsAPI.data });
  } catch (err) {
    res.render("manage/product", { food: null });
  }
};
const inputproducts = async (req, res) => {
  res.render("manage/inputproduct");
};

module.exports = {
  homepage,
  productsPage,
  addproducts,
  inputproducts,
};
