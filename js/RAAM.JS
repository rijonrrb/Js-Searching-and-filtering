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
    <h4>${n.name}</h4>
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
  name: "PNY XLR8 EPIC-X RGB 8GB RAM",
  cost: 26,
  type: "PNY",
  image:"./css/Pictures/ram1.jpg",
  size: "8GB",
  des: "Extreme Overclocking Capabilities",
  link: "./Controller/ram1.php",
  date: "2020t"
},
{
  name: "Adata XPG SPECTRIX D50 8GB DDR4 RAM",
  cost: 26.5,
  type: "ADATA",
  image:"./css/Pictures/ram2.jpg",
  size: "8GB",
  des: "Supports the latest Intel & AMD platforms",
  link: "./Controller/ram2.php",
  date: "2021t"

},
{
  name: "GeIL POLARIS RGB 16GB DDR5 RAM",
  cost: 27,
  type: "GeIL",
  image:"./css/Pictures/ram3.jpg",
  size: "16GB",
  des: "Designed for content creators and gamers",
  link: "./Controller/ram3.php",
  date: "2020t"
},
{
  name: "G.Skill Trident Z NEO RGB 8GB RAM",
  cost: 27.5,
  type: "G.Skill",
  image:"./css/Pictures/ram4.jpg",
  size: "8GB",
  des: "Intel XMP 2.0 Ready, Non-ECC",
  link: "./Controller/ram4.php",
  date: "2019t"
}
];

outputGoods(DATA);
