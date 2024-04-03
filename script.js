const products = [
  {
    id: 0,
    image: "images/sweatshirt.webp",
    title: "Black Longsleeve Men",
    price: 25,
  },

  {
    id: 1,
    image: "images/justdoit.webp",
    title: "Grey Longsleeve Men",
    price: 32,
  },

  {
    id: 2,
    image: "images/ashlong.jpeg",
    title: "Ash Longsleeve Men",
    price: 28,
  },

  {
    id: 3,
    image: "images/blue.jpeg",
    title: "Blue T-shirt Nike Air",
    price: 17.8,
  },

  {
    id: 4,
    image: "images/R.jpeg",
    title: "Basketball T-shirt Black",
    price: 10,
  },

  {
    id: 5,
    image: "images/redtshirt.webp",
    title: "Red T-shirt Nike Air",
    price: 12,
  },

  {
    id: 6,
    image: "images/bluesneaker.jpeg",
    title: "Blue Sneakers Men",
    price: 45.8,
  },

  {
    id: 7,
    image: "images/ashsneakers.jpeg",
    title: "Breathable Mesh Sneakers Men",
    price: 49.5,
  },

  {
    id: 8,
    image: "images/blacknorange.webp",
    title: "Black Nike Pro",
    price: 33.9,
  },
];

const cart = [];

const btnList = document.getElementsByClassName("add-item");
const cartID = document.getElementById("cartID");
const label = document.getElementById("label");
const total = document.getElementById("$price");

var cnt = 0;

/////////////////////////////////////////////
const createCart = (data, id) => {
  //create cart list starts
  const list = document.createElement("li");
  2;
  list.className = "cartList";
  list.id = `list${id}`;
  const parag = document.createElement("p");
  parag.innerHTML = data.title;
  const span = document.createElement("span");
  span.innerHTML = data.price;
  const btn = document.createElement("button");
  btn.innerHTML = "delete";

  btn.addEventListener("click", () => {
    //delete button start
    const EltoDelete = cart.find((el) => el.id === id);
    const index = cart.indexOf(EltoDelete);
    cart.splice(index, 1);
    cartID.removeChild(document.getElementById(`list${id}`));
    label.innerHTML = cart.length;

    if (cart.length < 1) {
      const empty = document.createElement("p");
      empty.id = "empty";
      empty.style.fontSize = "18px";
      empty.innerHTML = "Your cart is empty!";
      cartID.appendChild(empty);
      total.innerHTML = `$0.00`;

      return;
    }

    var totalP = 0;
    const price = cart.map((item) => item.price);
    for (let any in price) {
      totalP += price[any];
    }
    total.innerHTML = `$${totalP}.00`;
  }); //delete button end

  list.appendChild(parag);
  list.appendChild(span);
  list.appendChild(btn);
  cartID.appendChild(list);

  label.innerHTML = cart.length;

  var totalP = 0;
  const price = cart.map((item) => item.price);
  for (let any in price) {
    totalP += price[any];
  }

  total.innerHTML = `$${totalP}.00`;
}; //create cart list ends
/////////////////////////////////////////////////

for (let i = 0; i < btnList.length; i++) {
  //addEvent listeners to button
  btnList[i].addEventListener("click", () => {
    const prod = products[i];
    prod.id = cnt;
    cart.push(prod);
    createCart(prod, cnt);
    cnt += 1;

    if (cart.length === 1) {
      cartID.removeChild(document.getElementById("empty"));
    }
  });
}
//////////////////////////////////////////

const empty = document.createElement("p");
empty.id = "empty";
empty.style.fontSize = "18px";
empty.innerHTML = "Your cart is empty!";
cartID.appendChild(empty);

// console.log("runs");

// const prodList = document.getElementById("listCont");

// const init = () => {
//   for (let i = 0; i < products.length; i++) {
//     const prodElement = document.createElement("div");
//     prodElement.className = "items";
//     const image = document.createElement("img");
//     image.className = "item";
//     image.src = products[i].image;
//     image.alt = "products";
//     const desc = document.createElement("h4");
//     desc.innerHTML = products[i].title;
//     const parag = document.createElement("p");
//     parag.innerHTML = `$ ${products[i].price}`;
//     const btn = document.createElement("button");
//     btn.className = "add-item";
//     btn.innerHTML = "Add to cart";

//     prodElement.appendChild(image);
//     prodElement.appendChild(desc);
//     prodElement.appendChild(parag);
//     prodElement.appendChild(btn);

//     prodList.appendChild(prodElement);
//   }
// };

// window.addEventListener("load", init);
