const filters = document.querySelector("#filters");

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
    <div class ="itemBox">
    <div class="card">
      <img src="${n.image}">
      <div id="tt">
      <h3>${n.name}</h3>
      <p>${n.des}</p>
      <br>
      <br>
      <div>
        <a href="${n.link}" class="tbtn">
        <span class="text">Text</span>
        <span class="flip-front">Price-${n.cost}$</span>
        <span class="flip-back">Go for Details..</span>
        </a><br><br><br><br>
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
    image:"../view/css/Pictures/hdp1.jpg",
    size: "Bluetooth",
    des: "Sterio Bluetooth Headset",
    link: "../view/hd1.php",
    date: "2020t"
  },
  {
    name: "Asus Gaming Headset ROG",
    cost: 99,
    type: "Asus",
    image:"../view/css/Pictures/hdp2.jpg",
    size: "Wire",
    des: "Theta 7.1",
    link: "../view/hd2.php",
    date: "2021t"

  },
  {
    name: "Asus ROG Strix Fusion 700 Virtual",
    cost: 99,
    type: "Asus",
    image:"../view/css/Pictures/hdp3.jpg",
    size: "Bluetooth",
    des: "7.1 LED",
    link: "../view/hd3.php",
    date: "2020t"
  },
  {
    name: "Logitech G432",
    cost: 99,
    type: "Logitech",
    image:"../view/css/Pictures/hdp4.jpg",
    size: "Wire",
    des: "Sound Gaming Headset PC PS4XBOX PS5",
    link: "../view/hd4.php",
    date: "2019t"
  }
];

outputGoods(DATA);
