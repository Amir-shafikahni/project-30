let $ = document;

//////////////////////////////

// variables //////////////////
const body = $.body;
const basketItemsCountElem = $.querySelector(".basket-items-count");
const themeContainer = $.querySelector(".theme-container");
const themeBall = $.querySelector(".ball");
const themIcon = $.querySelector(".theme-icon");
const shopItemsContainer = $.querySelector(".shop-items-container");
const pagiantionBtnsContainer = $.querySelector(".pagiantion-btns-container");

let shopProducts = [
  {
    id: 1,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-1.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 10,
  },
  {
    id: 2,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-2.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 20,
  },
  {
    id: 3,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-3.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 30,
  },
  {
    id: 4,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-4.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 40,
  },
  {
    id: 5,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-5.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 50,
  },
  {
    id: 6,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-6.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 60,
  },
  {
    id: 7,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-7.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 70,
  },
  {
    id: 8,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-8.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 80,
  },
  {
    id: 9,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-9.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 90,
  },
  {
    id: 10,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-10.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 100,
  },
  {
    id: 11,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-11.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 110,
  },
  {
    id: 12,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-12.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 120,
  },
  {
    id: 13,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-13.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 130,
  },
  {
    id: 14,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-14.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 140,
  },
  {
    id: 15,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-15.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 150,
  },
  {
    id: 16,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-16.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 160,
  },
  {
    id: 17,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-17.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 170,
  },
  {
    id: 18,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-18.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 180,
  },
  {
    id: 19,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-19.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 190,
  },
  {
    id: 20,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-20.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 200,
  },
  {
    id: 21,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-21.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 210,
  },
  {
    id: 22,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-22.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 220,
  },
  {
    id: 23,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-23.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 230,
  },
  {
    id: 24,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-24.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 240,
  },
  {
    id: 25,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-25.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 250,
  },
  {
    id: 26,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-26.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 260,
  },
  {
    id: 27,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-27.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 270,
  },
  {
    id: 28,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-28.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 280,
  },
  {
    id: 29,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-29.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 290,
  },
  {
    id: 30,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-30.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 300,
  },
  {
    id: 31,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-31.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 310,
  },
  {
    id: 32,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-32.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 320,
  },
  {
    id: 33,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-33.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 330,
  },
  {
    id: 34,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-34.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 340,
  },
  {
    id: 35,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-35.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 350,
  },
  {
    id: 36,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-36.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 360,
  },
  {
    id: 37,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-37.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 370,
  },
  {
    id: 38,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-38.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 380,
  },
  {
    id: 39,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-39.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 390,
  },
  {
    id: 40,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-40.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 400,
  },
  {
    id: 41,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-41.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 410,
  },
  {
    id: 42,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-42.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 420,
  },
  {
    id: 43,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-43.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 430,
  },
  {
    id: 44,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-44.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 440,
  },
  {
    id: 45,
    count: 0,
    src: "./Source/Media/Img/shop-items-imgs/card-img-45.png",
    title: "lorem Ipsum",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, doloribus laboriosam deleniti soluta nam, earum ipsam, voluptatibus ipsum cum nihil temporibus tempora commodi sunt expedita voluptate voluptatem. Debitis, voluptate quia.",
    price: 450,
  },
];

localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
let userBasket = [];

let rowsPerPage = 8;
let currentPageNumber = 1;


// functions /////////////////////
// to get user basket from local storage on load
function getUserBasketFromLocalStorage() {
  let basket = JSON.parse(localStorage.getItem("userBasket"));

  if (basket) {
    userBasket = basket;
  } else {
    userBasket = [];
    setUserBasketInToLocalStorage(userBasket);
  }

  basketItemsCountElem.innerHTML = userBasket.length;
}

// to set user basket in to local storage
function setUserBasketInToLocalStorage(userBasket) {
  localStorage.setItem("userBasket", JSON.stringify(userBasket));
}

// to check and apply the theme on load
function themeCheckByLocalStorage() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    setDarkTheme();
  } else if (theme === "light") {
    setLightTheme();
  } else {
    setLightTheme();
    setThemeToLocalStorage("light");
  }
}

// to change the theme
function changeTheme() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    setLightTheme();
  } else if (theme === "light") {
    setDarkTheme();
  }
}

// to set light theme
function setLightTheme() {
  themeBall.style.backgroundColor = "var(--primary-color)";
  themeBall.style.transform = "translateX(-2px)";
  themIcon.className = "bi bi-moon-fill";

  document.documentElement.style.setProperty("--theme-background", "#ffffff");
  document.documentElement.style.setProperty("--text-color", "#000");
  document.documentElement.style.setProperty("--box-shadow", "#0000001a");
  document.documentElement.style.setProperty("--border-color", "#00000033");

  setThemeToLocalStorage("light");
}

// to set daek theme
function setDarkTheme() {
  themeBall.style.backgroundColor = "var(--text-color)";
  themeBall.style.transform = "translateX(20px)";
  themIcon.className = "bi bi-brightness-alt-high-fill";

  document.documentElement.style.setProperty("--theme-background", "#000");
  document.documentElement.style.setProperty("--text-color", "#f5f5f5");
  document.documentElement.style.setProperty("--box-shadow", "#ffffff33");
  document.documentElement.style.setProperty("--border-color", "#ffffff4d");

  setThemeToLocalStorage("dark");
}

// to set the theme in to local storage
function setThemeToLocalStorage(theme) {
  localStorage.setItem("theme", theme);
}

// to calculate the number of pagination Btns and then append theme to dom
function paginationBtnsGenerator() {
  let btnsCount = Math.ceil(shopProducts.length / rowsPerPage);
  let pagiantionBtnsFragment = $.createDocumentFragment();

  for (let i = 1; i <= btnsCount; i++) {
    let paginationBtn = $.createElement("button");
    paginationBtn.innerHTML = i;
    paginationBtn.className ="pagiantion-btn pagiantion-btn-" + i + " btn btn-outline-primary me-1";
    paginationBtn.setAttribute("onclick", "updateCurrentPageNumber(" + i + ")");

    pagiantionBtnsFragment.append(paginationBtn);
  }

  pagiantionBtnsContainer.append(pagiantionBtnsFragment);
}

// to update current page number and add an active class to the clicked btn
function updateCurrentPageNumber(btnNumber) {
  let allPagiantionBtns = $.querySelectorAll(".pagiantion-btn");
  allPagiantionBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });

  let mainBtnElem = $.querySelector(".pagiantion-btn-" + btnNumber + "");
  mainBtnElem.classList.add("active");
  mainBtnElem.blur();

  currentPageNumber = mainBtnElem.innerHTML;

  setCurrentPageNumberInToLocalStorage(currentPageNumber);
  shopArraySlicer(rowsPerPage, currentPageNumber);
}

// to set current page number in to the local storage
function setCurrentPageNumberInToLocalStorage(lastPageNumber) {
  localStorage.setItem("lastPageNumber", lastPageNumber);
}

// to get the last page number from local storage
function getLastPageNumberFromLocalStorage() {
  let localStoragePageNumber = localStorage.getItem("lastPageNumber");

  if (localStoragePageNumber) {
    currentPageNumber = localStoragePageNumber;
  } else {
    currentPageNumber = 1;
  }

  updateCurrentPageNumber(currentPageNumber);
}

// to slice the shop items array based on the number of rows per page and pagiantion Btns
function shopArraySlicer(rowsPerPage, pageNumber) {
  let startIndex = rowsPerPage * pageNumber - rowsPerPage;
  let endIndex = rowsPerPage * pageNumber;

  let slicedShopArray = shopProducts.slice(startIndex, endIndex);

  domUpdater(slicedShopArray);
}

// to create a HTML template using the sliced array and then append it dom
function domUpdater(itemsArray) {
  let itemFragment = $.createDocumentFragment();
  shopItemsContainer.innerHTML = "";

  itemsArray.forEach(function (item) {
    let cardItemContainer = $.createElement("div");
    cardItemContainer.className =
      "card-item-contianer col-12 col-md-6 col-lg-4 mb-4";

    let sumTitle = item.discription.slice(0, 115);

    cardItemContainer.insertAdjacentHTML("beforeend" ,
      '<div class="card-item">'+
        '<div class="card-item-img-container bg-primary">'+
          '<img class="img-fluid w-100" src="'+ item.src +'">'+
        '</div>'+
        '<div class="card-item-info p-3">'+
          '<h5 class="card-item-title my-2">'+ item.title +'</h5>'+
          '<div class="card-item-description mb-3">'+ sumTitle+'...</div>'+
          '<h5 class="card-item-price text-end">'+ item.price +'$</h5>'+
          '<a href="./discription.html?id='+ item.id +'" class="card-item-btn btn" title="Click to see more info">See More</a>'+
        '</div>'+
      '</div>'
    )

    itemFragment.append(cardItemContainer);
  });

  shopItemsContainer.append(itemFragment);

  scrollTo(0, 0);
}


// event listeners ///////////////
window.addEventListener("load", getUserBasketFromLocalStorage);
window.addEventListener("load", themeCheckByLocalStorage);
window.addEventListener("load", paginationBtnsGenerator);
window.addEventListener("load", getLastPageNumberFromLocalStorage);
themeContainer.addEventListener("click", changeTheme);