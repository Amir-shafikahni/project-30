let $ = document;

//////////////////////////////

// variables //////////////////
const body = $.body;
const basketItemsCountElem = $.querySelector(".basket-items-count")
const goBackBtn = $.querySelector(".go-back-btn")
const cardItemContainer = $.querySelector(".card-item-container")

let userBasket = []
let isExistInUserBasket = false

// functions /////////////////////
// to change the theme on load
function themeCheckByLocalStorage() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    setDarkTheme();
  } else if (theme === "light") {
    setLightTheme();
  } else {
    setLightTheme()
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
function getUserBasketFromLocalStorage(){
  let basket = JSON.parse(localStorage.getItem("userBasket"))

  if(basket){
    userBasket = basket
  }else{
    userBasket = []
    setUserBasketInToLocalStorage(userBasket)
  }

  basketItemsCountElem.innerHTML = userBasket.length
}

// to set user basket in to the local storage
function setUserBasketInToLocalStorage(userBasket){
  localStorage.setItem("userBasket" , JSON.stringify(userBasket))
}

// to get the main item by its ID and looking for it in Shop Products Array
function getMainItem(){
  let shopProducts = JSON.parse(localStorage.getItem("shopProducts"))

  let locationSearch = location.search
  let locationParams = new URLSearchParams(locationSearch)
  let itemIdParam = locationParams.get("id")

  let mainItem = shopProducts.find(function(item){
    return item.id == itemIdParam
  })

  productTemaplateGenerator(mainItem)
}

// to create a template for the main item and append it dom
function productTemaplateGenerator(product){
  cardItemContainer.innerHTML = ""

  let cardItemContainerRow = $.createElement("div")
  cardItemContainerRow.className = "row mb-5"

  cardItemContainerRow.insertAdjacentHTML("beforeend" , 
    '<div class="col-12 col-lg-6">'+
      '<div class="img-container text-center">'+
        '<img src="'+ product.src +'">'+
      '</div>'+
    '</div>'+
    '<div class="card-item-info-container m-auto col-11 col-lg-6 mt-4 mt-lg-1">'+
      '<div>'+
        '<h4 class="card-item-title">'+ product.title +'</h4>'+
      '</div>'+
      '<div class="card-item-discription">'+ product.discription +'</div>'+
      '<div class="card-item-button text-end col-12 col-md-11 mt-4 mt-lg-5 m-auto">'+
        '<button class="card-item-basket-btn btn mb-5"><span class="button-text">Add to basket</span></button>'+
      '</div>'+
    '</div>'
  )

  cardItemContainer.append(cardItemContainerRow)

  let addToBasketBtn = $.querySelector(".card-item-basket-btn")
  let btnText = $.querySelector(".button-text")

  //to set locading animation 
  addToBasketBtn.addEventListener("click" , function(){
    addToBasketBtn.classList.add("button-loading")
    addToBasketBtn.blur()

    setTimeout(function(){
      basketValidation(product , addToBasketBtn , btnText)
    },2000)
  })
}

// to chack eather prodocut exists in user basket or not
function basketValidation(product , productBtn , productBtnText){
   userBasket.forEach(function(item){
    if(item.id === product.id){
      isExistInUserBasket = true
    }
  })

  if(isExistInUserBasket){
    productBtnText.innerHTML = '<i class="bi bi-cart-x"></i>'
  }else{
    productBtnText.innerHTML = '<i class="bi bi-cart-check pb-3"></i>'
    userBasket.push(product)
    setUserBasketInToLocalStorage(userBasket)
  }

  basketItemsCountElem.innerHTML = userBasket.length
  productBtn.classList.remove("button-loading")
}

// event listener
window.addEventListener("load", themeCheckByLocalStorage);
window.addEventListener("load", getUserBasketFromLocalStorage)
window.addEventListener("load", getMainItem)
goBackBtn.addEventListener("click" , function(){
  history.go(-1)
})