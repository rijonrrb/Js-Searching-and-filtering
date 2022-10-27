const filters = document.querySelector("#Box");

filters.addEventListener("input", filterGoods);

function filterGoods() {
  const type = filters.querySelector("#type").value,
  date = filters.querySelector("#date").value,
  sizes = [...filters.querySelectorAll("#size input:checked")].map(
    (n) => n.value
    ),
  priceMin = document.querySelector("#price-min").value,
  priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
      (!type || n.type === type) &&
      (!date || n.date === date) &&
      (!sizes.length || sizes.includes(n.size)) &&
      (!priceMin || priceMin <= n.cost) &&
      (!priceMax || priceMax >= n.cost)
      )
    );
}

function outputGoods(goods) {
  document.getElementById("goods").innerHTML = goods
  .map(
    (n) => `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div class ="itemBox">
    <div class="card">
    <img src="${n.image}">
    <div id="tt">
    <h5>${n.name}</h5>
    <p>${n.des}</p>
    <br>
    <br>
    <div>
    <a href="${n.link}" class="tbtn">
    <span class="text">Text</span>
    <span class="flip-front">Price-${n.cost}$</span>
    <span class="flip-back">Go for Details..</span>
    </a>
    <br>
    <br>
    <br>
    <br>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
    )
  .join("");
}

const DATA = [
{
  name: "Zotac GeForce GT 710",
  cost: 99,
  type: "ZOTAC",
  image:"./css/Pictures/gpu1.jpg",
  size: "2GB",
  des: "2GB DDR3 Graphics Card",
  link: "./Controller/gpu1.php",
  date: "2020t"
},
{
  name: "MSI GT 710",
  cost: 99,
  type: "MSI",
  image:"./css/Pictures/gpu2.jpg",
  size: "2GB",
  des: "2GD3H LP 2GB DDR3 Gaming Graphic Card",
  link: "./Controller/gpu2.php",
  date: "2021t"

},
{
  name: "GIGABYTE GeForce GT 730",
  cost: 99,
  type: "GIGABYTE",
  image:"./css/Pictures/gpu3.jpg",
  size: "2GB",
  des: "2GB DDR3 PCI EXPRESS Graphics Card",
  link: "./Controller/gpu3.php",
  date: "2020t"
},
{
  name: "Gigabyte GTX 1050 Ti",
  cost: 99,
  type: "GIGABYTE",
  image:"./css/Pictures/gpu4.jpg",
  size: "4GB",
  des: "OC 4GB DDR5 Graphics Card",
  link: "./Controller/gpu4.php",
  date: "2019t"
}
];

outputGoods(DATA);
