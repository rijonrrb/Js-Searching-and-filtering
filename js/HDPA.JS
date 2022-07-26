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
  name: "Voyager Focus UC",
  cost: 371,
  type: "Voyager",
  image:"./css/Pictures/hdp1.jpg",
  size: "Bluetooth",
  des: "Sterio Bluetooth Headset",
  link: "./Controller/hd1.php",
  date: "2020t"
},
{
  name: "Asus Gaming Headset ROG",
  cost: 99,
  type: "Asus",
  image:"./css/Pictures/hdp2.jpg",
  size: "Wire",
  des: "Theta 7.1",
  link: "./Controller/hd2.php",
  date: "2021t"

},
{
  name: "Asus ROG Strix Fusion 700 Virtual",
  cost: 99,
  type: "Asus",
  image:"./css/Pictures/hdp3.jpg",
  size: "Bluetooth",
  des: "7.1 LED",
  link: "./Controller/hd3.php",
  date: "2020t"
},
{
  name: "Logitech G432",
  cost: 99,
  type: "Logitech",
  image:"./css/Pictures/hdp4.jpg",
  size: "Wire",
  des: "Sound Gaming Headset PC PS4XBOX PS5",
  link: "./Controller/hd4.php",
  date: "2019t"
}
];

outputGoods(DATA);
