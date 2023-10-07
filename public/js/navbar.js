let searchBtn = document.querySelector(".searchBtn");
let searchButonActive = document.querySelectorAll(".searchBtn.active");
let closeBtn = document.querySelector(".closeBtn");
let searchbox = document.querySelector(".searchbox");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
let input = document.getElementById("find");
let count = 0;

const searchproduct = function () {
  window.location.href = "/products" + `/${input.value}`;
  count = 0;
};

const nextCount = function () {
  if (count === 1) {
    searchbox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
    menuToggle.classList.add("hide");
    header.classList.remove("open");
  } else if (count === 2) searchproduct();
};
searchBtn.onclick = function () {
  count = count === 2 ? 0 : count + 1;
  nextCount();
};
// window.location.href = "/products";

closeBtn.onclick = function () {
  searchbox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
  count = 0;
};
menuToggle.onclick = function () {
  header.classList.toggle("open");
  searchbox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
};
