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
  name: "Team GX1 120GB 2.5 SATA III SSD",
  cost: 24.6,
  type: "TEAM",
  image:"./css/Pictures/ssd1.jpg",
  size: "120GB",
  des: "120GB, Form Factor: 7mm height, 2.5",
  link: "./Controller/ssd1.php",
  date: "2020t"
},
{
  name: "PNY CS900 120GB 2.5 SATA III SSD",
  cost: 22,
  type: "PNY",
  image:"./css/Pictures/ssd2.jpg",
  size: "120GB",
  des: "Interface SATA-III 6Gb/s",
  link: "./Controller/ssd2.php",
  date: "2021t"

},
{
  name: "Team GX1 120GB 2.5 SATA III SSD",
  cost: 23.5,
  type: "TEAM",
  image:"./css/Pictures/ssd3.jpg",
  size: "120GB",
  des: "SATA Rev. 3.0 (6Gb/s) – with backwards compatibility",
  link: "./Controller/ssd3.php",
  date: "2020t"
},
{
  name: "HP EX900 M.2 120GB PCIe NVMe SSD",
  cost: 22,
  type: "HP",
  image:"./css/Pictures/ssd4.jpg",
  size: "120GB",
  des: "HP EX900 M.2 120GB PCIe NVMe Internal SSD",
  link: "./Controller/ssd4.php",
  date: "2019t"
}
];

outputGoods(DATA);
