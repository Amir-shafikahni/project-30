let $ = document;

//////////////////////////////

// variables //////////////////
const body = $.body;
const costumizedScrollBar = $.querySelector(".costumized-scroll-bar")
const basketItemsCountElem = $.querySelector(".basket-items-count");
const goBackBtn = $.querySelector(".go-back-btn");
const alertsContainer = $.querySelector(".alerts-container");
const cartBodyContainer = $.querySelector(".cart-body-container")
const cartTotalPriceElem = $.querySelector(".total-price")

// functions /////////////////////
// make a costume scroll bar on top
function costumeScroll(){
  let bodyHeight = body.clientHeight
  let scrollHeight = window.scrollY
  let userScreenHeight = window.innerHeight

  let scrollPercent = Math.ceil((scrollHeight/(bodyHeight - userScreenHeight)) *100) + "%"

  costumizedScrollBar.style.width = scrollPercent
}

// to change the theme on load
function themeCheckByLocalStorage() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    setDarkTheme();
  } else if (theme === "light") {
    setLightTheme();
  } else {
    setLightTheme();
  }
}

// to set light theme
function setLightTheme() {
  document.documentElement.style.setProperty("--theme-background", "#ffffff");
  document.documentElement.style.setProperty("--text-color", "#000");
  document.documentElement.style.setProperty("--box-shadow", "#0000001a");
  document.documentElement.style.setProperty("--border-color", "#00000033");
}

// to set daek theme
function setDarkTheme() {
  document.documentElement.style.setProperty("--theme-background", "#000");
  document.documentElement.style.setProperty("--text-color", "#f5f5f5");
  document.documentElement.style.setProperty("--box-shadow", "#ffffff33");
  document.documentElement.style.setProperty("--border-color", "#ffffff4d");
}

// to get user basket from local storage on load
function getUserBasketFromLocalStorage() {
  let basket = JSON.parse(localStorage.getItem("userBasket"));

  if (basket) {
    userBasket = basket;
  } else {
    userBasket = [];
    setUserBasketInToLocalStorage(userBasket);
  }

  totalPriceUpdater(userBasket)
  cartItemsGenerator(userBasket)
  updateBasketItemsCount(userBasket)
}

// to update basket items count and append it do dom
function updateBasketItemsCount (userBasket){
  basketItemsCountElem.innerHTML = userBasket.length
}

// to set user basket in to the local storage
function setUserBasketInToLocalStorage(userBasket) {
  localStorage.setItem("userBasket", JSON.stringify(userBasket));
}

// to create a template for cart items and append it to dom
function cartItemsGenerator(cartItemsArray){
  cartBodyContainer.innerHTML = ""
  let cartItemsFragment = $.createDocumentFragment()

  cartItemsArray.forEach(function(item){

    let cartItem = $.createElement("div")
    cartItem.className = "cart-item col-12 col-md-11 col-lg-9 d-flex m-auto"

    cartItem.insertAdjacentHTML("beforeend" ,
      '<div class="cart-item-info d-flex">'+
        '<div class="cart-item-img">'+
          '<img class="img-fluid" src="'+ item.src +'">'+
        '</div>'+
        '<div class="cart-item-title d-flex">'+ item.title +'</div>'+
      '</div>'+
      '<div class="cart-item-price text-center">'+ item.price +'$</div>'+
      '<div class="cart-item-quantity">'+
        '<div class="item-quantity m-auto d-flex">'+
          '<i id="trash-btn'+item.id+'" class="bi bi-trash" onclick="itemRemover('+ item.id +')"></i>'+
          '<i id="minus-btn'+item.id+'" class="bi bi-dash" onclick="itemCountMinus('+ item.id +')"></i>'+
          '<span class="cart-item-count px-2">'+ item.count +'</span>'+
          '<i class="bi bi-plus" onclick="itemCountPlus('+ item.id +')"></i>'+
        '</div>'+
      '</div>'
    )

    cartItemsFragment.append(cartItem)
  });

  cartBodyContainer.append(cartItemsFragment)

  // to set block or none display to trash or minus btns based on items count
  cartItemsArray.forEach(function(item){
    if(item.count > 1){
      let itemTrashBtn = $.getElementById("trash-btn"+ item.id+ "")
      let itemMinusBtn = $.getElementById("minus-btn"+ item.id +"")

      itemTrashBtn.style.display = "none"
      itemMinusBtn.style.display = "block"
    }
  })

  totalPriceUpdater(userBasket)
}

// to add the item count by +1
function itemCountPlus(itemId){
  userBasket.forEach(function(product){
    if(product.id === itemId && product.count < 10){
      product.count++

      cartItemsGenerator(userBasket)
      setUserBasketInToLocalStorage(userBasket)
      showAlert("green-alert" , "Your changes are seved successfully" , "bi-check-circle-fill")

      return
    }
  })
}

// to minus the item count by -1
function itemCountMinus(itemId){
  userBasket.forEach(function(product){
    if(product.id === itemId){
      product.count--

      cartItemsGenerator(userBasket)
      setUserBasketInToLocalStorage(userBasket)
      showAlert("green-alert" , "Changes are seved successfully" , "bi-check-circle-fill")

      return
    }
  })
}

// to remove an item from user basket  
function itemRemover(itemId){
  userBasket = userBasket.filter(function(item){
    return item.id !== itemId
  })

  cartItemsGenerator(userBasket)
  updateBasketItemsCount(userBasket)
  setUserBasketInToLocalStorage(userBasket)
  showAlert("red-alert" , "Item removed from basket" , "bi-info-circle-fill")
}

// to update total user basket items price and append it to dom
function totalPriceUpdater(userBasket){
  let itemsTotalPrice = 0

  userBasket.forEach(function(item){
    itemsTotalPrice += (item.count * item.price)
  })

  cartTotalPriceElem.innerHTML = itemsTotalPrice + "$"
}

// to show an alert when clicking on "Add To Basket" Btn
function showAlert(alertName, alertMsg, alertIcon) {
  let alertElem = $.createElement("span");
  alertElem.className = "alert show " + alertName;

  alertElem.insertAdjacentHTML(
    "beforeend",
    '<span class="warning-icon bi '+ alertIcon +'"></span>' +
    '<span class="msg">'+ alertMsg +"</span>" +
    '<span class="close-btn bi bi-x-lg" onclick="getAlertElem(event)"></span>'
  );

  alertsContainer.append(alertElem);

  // to hide the alert automatically after 5sec
  setTimeout(function () {
    hideAlert(alertElem);
  }, 4000);
}

// to get the exact button that user has clicked on it
function getAlertElem(event) {
  let alertElem = event.target.parentElement;

  hideAlert(alertElem);
}

// to hide the alert with animation
function hideAlert(alertElem) {
  alertElem.classList.remove("show");
  alertElem.classList.add("hide");

  setTimeout(function () {
    removeAlert(alertElem);
  }, 600);
}

// to remove the alert from dom
function removeAlert(alertElem) {
  alertElem.remove();
}


// event listeners /////////////////////// 
window.addEventListener("load", themeCheckByLocalStorage);
window.addEventListener("load", getUserBasketFromLocalStorage);
window.addEventListener("scroll" , costumeScroll)
goBackBtn.addEventListener("click", function () {
  history.go(-1);
});