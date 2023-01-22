let productdata = JSON.parse(localStorage.getItem("inddata"))
let productimg = document.getElementById("productimg")
let image = document.createElement("img")
image.src = productdata.image;
productimg.append(image)
let heading2 = document.querySelector("h2")
heading2.textContent = productdata.title;
let price = document.getElementById("original")
price.textContent = "$" + productdata.price + " USD";
let description = document.getElementById("details")
description.textContent = productdata.description;
let total = 0;

let counter = document.getElementById("counter")

let plusbtn = document.getElementById("plusbtn")
plusbtn.addEventListener("click", () => {
    productdata.quantity++;
    localStorage.setItem("inddata", JSON.stringify(productdata))
    counter.textContent = productdata.quantity;
    total = productdata.price * productdata.quantity;
    price.textContent = "$" + total + " USD";
})

let minusbtn = document.getElementById("minusbtn")
minusbtn.addEventListener("click", () => {
    if (productdata.quantity > 1) {
        productdata.quantity--;
        localStorage.setItem("inddata", JSON.stringify(productdata))
        counter.textContent = productdata.quantity;
        total = productdata.price * productdata.quantity;
        price.textContent = "$" + total + " USD";
    }
})
let cartdata = JSON.parse(localStorage.getItem("cartdata")) || []
let addtobagbtn=document.getElementById("addtocart")
addtobagbtn.addEventListener("click",()=>{
    if(duplichecker(productdata)==true){
        alert("Product is already added in cart")
    }
    else{
        cartdata.push({...productdata,quantity:1})
        localStorage.setItem("cartdata",JSON.stringify(cartdata))
        alert("Product added in cart")
    }
    
})
function duplichecker(product){
    for(let i=0; i<cartdata.length; i++){
        if(cartdata[i].id==product.id){
            return true;
        }
    }
    return false;
}
let heading1 = document.querySelector("h1")
heading1.addEventListener("click", () => {
    window.location.assign("index.html")
})
const searchbox = document.querySelector("#searchinp")
const searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click", () => {
    console.log(searchbox.value)
    localStorage.setItem("searchquery", JSON.stringify(searchbox.value))
    window.location.assign("search.html")
})
let logindata = JSON.parse(localStorage.getItem("logindata"))
let bag = document.getElementById("bag")
bag.addEventListener("click", () => {
    if (logindata == {} || logindata == "" || logindata == undefined) {
        alert("Please login to see bag")
        setTimeout(() => {
            window.location.assign("account.html")
        }, 200)
    }
    else {
        window.location.assign("cart.html")
    }
})
let favoritedata=JSON.parse(localStorage.getItem("favdata"))||[]
let favbtn=document.getElementById("favorite")
favbtn.addEventListener("click",()=>{
    if(dupli(productdata)==true){
        alert("Product already added to favorite")
    }else{
        favoritedata.push(productdata)
        localStorage.setItem("favdata",JSON.stringify(favoritedata))
        alert("product added to favorite")
    }
    
})
function dupli(data){
    for(let i=0; i<favoritedata.length; i++){
        if(favoritedata[i].id==data.id){
            return true;
        }
    }
    return false;
}