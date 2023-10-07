// const axios = require("axios");

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");
let header = previewContainer.querySelector("header");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
        header.classList.add("header-zindex-1");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".close").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});

const selectProduct = async () => {
  // const test = await axios.get("/api/product");
  console.log(12313);
};
selectProduct();
