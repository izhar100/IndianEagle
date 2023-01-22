let cartdata = JSON.parse(localStorage.getItem("cartdata")) || []
let logindata=JSON.parse(localStorage.getItem("logindata"))||{}
let shipingcharge=document.getElementById("shippingcharge")
let username=document.getElementById("name")
if(cartdata==[] || cartdata==""){
    username.textContent="Your bag is Empty...!"
}
else{
    username.textContent=logindata.name+"'s bag"
    shipingcharge.textContent="$0 USD"
}
let itemcard=document.getElementById("itemcard")
let itemdetails = document.getElementById("itemdetails")
let priceitem = document.getElementById("priceitem")
let totalprice = document.getElementById("totalprice")
let itemcount = document.getElementById("count")
let flag = true;
displaydata(cartdata)
function displaydata(data) {
    itemcount.textContent = data.length;
    itemdetails.innerHTML = "";
    cartdata.forEach((element, index) => {
        let image = document.getElementById("image")
        if (flag == true) {
            let itemimg = document.createElement("img")
            itemimg.src = element.image;
            image.append(itemimg)
            // flag=false;
        }
        let title = document.createElement("h3")
        title.textContent = element.title;
        let itmprice = document.createElement("h3")
        itmprice.setAttribute("id", "priceofitem")
        itmprice.textContent = "$" + element.price + " USD";
        let qty = document.createElement("p")
        qty.textContent = "Quantity: " + element.quantity;
        let keys = document.createElement("div")
        let minusbtn = document.createElement("button")
        minusbtn.textContent = "-"
        minusbtn.addEventListener("click", () => {
            if (element.quantity > 1) {
                element.quantity--;
            }
            localStorage.setItem("cartdata", JSON.stringify(cartdata))
            displaydata(data)
        })
        let plusbtn = document.createElement("button")
        plusbtn.textContent = "+"
        plusbtn.addEventListener("click", () => {
            element.quantity++;
            flag=false;
            localStorage.setItem("cartdata", JSON.stringify(cartdata))
            displaydata(data)
        })
        let removebtn = document.createElement("button")
        removebtn.textContent = "Remove"
        removebtn.addEventListener("click",()=>{
            cartdata=cartdata.filter((ele)=>{
                return ele.id!==element.id;
            })
            localStorage.setItem("cartdata",JSON.stringify(cartdata))
            displaydata(data)
        })
        let desheading = document.createElement("h3")
        desheading.textContent = "Description:"
        let descontent = document.createElement("p")
        descontent.setAttribute("class","disc")
        descontent.textContent = element.description;
        keys.append(minusbtn, plusbtn, removebtn)
        itemdetails.append(title, itmprice, qty, keys, desheading, descontent)
    })
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].price * data[i].quantity;
    }
    let coupon = document.getElementById("promocode")
    let couponbtn = document.getElementById("promobtn")
    let used = false;
    couponbtn.addEventListener("click", () => {
        let cpnvalue = coupon.value;
        // let totalsum = totalorder.textContent;
        if (cpnvalue == "New30" && used == false) {
            sum = sum - Math.floor(sum * 30 / 100)
            used = true;
        }
        console.log(sum)
        let tprice = sum + 0;
        shipingcharge.textContent="$0 USD"
        priceitem.textContent = "$" + sum + " USD";
        totalprice.textContent = "$" + tprice + " USD"
    })
    let tprice = sum + 0;
    priceitem.textContent = "$" + sum + " USD";
    totalprice.textContent = "$" + tprice + " USD"
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

