function search() {
  let filter = document.getElementById("find").value.toUpperCase();

  let item = document.querySelectorAll(".product");

  let l = document.getElementsByTagName("h3");
  for (var i = 0; i <= l.lenght; i++) {
    let a = item[i].getElementsByTagName("h3")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

// const product = [
//   {
//     id: 0,
//     image: "img/cherry.png",
//     title: "Cherry",
//     price: 2,
//   },
//   {
//     id: 1,
//     image: "img/chanh.png",
//     title: "Chanh",
//     price: 2,
//   },
//   {
//     id: 2,
//     image: "imag/đào.png",
//     title: "Đào",
//     price: 2,
//   },
//   {
//     id: 3,
//     image: "img/táo.png",
//     title: "Táo",
//     price: 2,
//   },
//   {
//     id: 4,
//     image: "img/dưa.png",
//     title: "Dưa",
//     price: 2,
//   },
//   {
//     id: 5,
//     image: "img/dứa.png",
//     title: "Dứa",
//     price: 2,
//   },
// ];

// const categories = [
//   ...new Set(
//     product.map((item) => {
//       return item;
//     })
//   ),
// ];
// document.getElementById("find").addEventListener("keyup", (e) => {
//   const searchData = e.target.value.toLowerCase();
//   const filterData = categories.filter((item) => {
//     return item.title.toLocaleLowerCase().includes(searchData);
//   });
//   displayItem(filterData);
// });
// const displayItem = (items) => {
//   document.getElementsByClassName("product").innerHTML = items
//     .map((item) => {
//       var { image, title, price } = item;
//       return `<div class = 'box'>
//                 <div class = 'img-box'>
//                     <img class = 'images' src= ${image}>
//                     </img>
//                 </div>
//                 <div class = 'bottom'>
//                     <p>${title}</p>
//                     <h2>$ ${price}</h2>
//                     <button>Buy Now</button>
//                     <button>Add to card</button>
//                 </div>

//             </div>`;
//     })
//     .join("");
// };
// displayItem(categories);
