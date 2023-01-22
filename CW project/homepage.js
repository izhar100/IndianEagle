let divimages = [
    "https://assets.olapic-cdn.com/media/c/p/i/cpixs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/5/u/n/5unxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/c/p/i/cpixs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/n/z/m/nzmxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/j/d/n/jdnxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/a/p/i/apixs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/5/u/n/5unxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/n/z/m/nzmxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/j/d/n/jdnxs65/normal.jpg",
    "https://assets.olapic-cdn.com/media/a/p/i/apixs65/normal.jpg",
]
const searchbox = document.querySelector("#searchinp")
const searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click", () => {
    console.log(searchbox.value)
    localStorage.setItem("searchquery", JSON.stringify(searchbox.value))
    window.location.assign("search.html")
})
let heading1 = document.querySelector("h1")
heading1.addEventListener("click", () => {
    window.location.assign("index.html")
})
let logindata = JSON.parse(localStorage.getItem("logindata"))
let bag = document.getElementById("bag")
bag.addEventListener("click", () => {
    if (logindata == {} || logindata == "" || logindata == undefined) {
        alert("Please login to see bag")
        setTimeout(() => {
            window.location.assign("account.html")
        }, 500)
    }
    else{
        window.location.assign("cart.html")
    }
})

