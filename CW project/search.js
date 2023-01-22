let searched = JSON.parse(localStorage.getItem("searchquery"))
if (searched.length > 1) {
    let resultbox = document.getElementById("right")
    async function fetchingdata() {
        // let inp = document.querySelector("#searchinp").value;
        let inp = searched;
        let searchkeyword = document.getElementById("keyword")
        searchkeyword.textContent = inp;
        try {
            let request = await fetch(`https://63c687494ebaa8028547befe.mockapi.io/product?search=${inp}`);
            let data = await request.json()
            displaydata(data)
            filterbygender(data)
            filterbyprice(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchingdata()
    function filterbygender(data) {
        let woman = document.getElementById("woman")
        let man = document.getElementById("man")
        woman.addEventListener("click", () => {
            if (woman.checked == true) {
                newdata = data.filter((ele) => {
                    return ele.gender == "woman";
                })
                displaydata(newdata)
            }
            else if (woman.checked == false) {
                displaydata(data)
            }
        })
        man.addEventListener("click", () => {
            if (man.checked == true) {
                newdata = data.filter((ele) => {
                    return ele.gender == "man";
                })
                displaydata(newdata)
            }
            else if (man.checked == false) {
                displaydata(data)
            }
        })

    }
    function filterbyprice(data) {
        let lessthan = document.getElementById("lessthan");
        let morethan = document.getElementById("morethan");
        lessthan.addEventListener("click", () => {
            if (lessthan.checked == true) {
                let newdata = data.filter((ele) => {
                    return ele.price < 100;
                })
                displaydata(newdata)
            }
            else if (lessthan.checked == false) {
                displaydata(data)
            }
        })
        morethan.addEventListener("click", () => {
            if (morethan.checked == true) {
                let newdata = data.filter((ele) => {
                    return ele.price > 100;
                })
                displaydata(newdata)
            }
            else if (morethan.checked == false) {
                displaydata(data)
            }
        })
    }
    let cartdata = JSON.parse(localStorage.getItem("cartdata")) || []
    let count = document.getElementById("total")
    let numberofdata = document.getElementById("numberof")
    function displaydata(data) {
        count.textContent = data.length;
        numberofdata.textContent = data.length;
        resultbox.innerHTML = ""
        data.filter((ele, ind) => {
            let prodiv = document.createElement("div")
            let img = document.createElement("img")
            img.setAttribute("class", "proimage")
            img.src = ele.image;
            img.addEventListener("mouseenter", () => {
                img.src = "https://s7d2.scene7.com/is/image/aeo/0119_6413_469_b?$cat-main_large$&fmt=webp"
            })
            img.addEventListener("mouseleave", () => {
                img.src = ele.image;
            })
            let btn = document.createElement("button")
            btn.setAttribute("class", "pbtn")
            btn.textContent = "Quick Shop"
            btn.addEventListener("click", () => {
                if (duplicheck(ele) == true) {
                    alert("Product is already added in cart")
                }
                else {
                    cartdata.push({ ...ele, quantity: 1 })
                    localStorage.setItem("cartdata", JSON.stringify(cartdata))
                    alert("Product added to cart")
                }

            })
            let tagline = document.createElement("p")
            tagline.innerText = "New+Real Good";
            let name = document.createElement("h2")
            name.textContent = ele.title;
            name.addEventListener("click", () => {
                localStorage.setItem("inddata", JSON.stringify({ ...ele,quantity:1}))
                window.location.assign("product.html")
            })
            let pricediv = document.createElement("div")
            let price1 = document.createElement("h3")
            price1.setAttribute("class", "price1")
            price1.textContent = "$" + ele.price + "USD";
            let price2 = document.createElement("p")
            price2.setAttribute("class", "price2")
            price2.textContent = "$600 USD";
            pricediv.append(price1, price2)
            prodiv.append(img, btn, tagline, name, pricediv)
            resultbox.append(prodiv)
        })
    }
    function duplicheck(item) {
        for (let i = 0; i < cartdata.length; i++) {
            if (cartdata[i].id == item[i].id) {
                return true;
            }
        }
        return false;
    }
}
const searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click", () => {
    let resultbox = document.getElementById("right")
    async function fetchingdata() {
        let inp = document.querySelector("#searchinp").value;
        let searchkeyword = document.getElementById("keyword")
        searchkeyword.textContent = inp;
        try {
            let request = await fetch(`https://63c687494ebaa8028547befe.mockapi.io/product?search=${inp}`);
            let data = await request.json()
            displaydata(data)
            filterbygender(data)
            filterbyprice(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchingdata()
    function filterbygender(data) {
        let woman = document.getElementById("woman")
        let man = document.getElementById("man")
        woman.addEventListener("click", () => {
            if (woman.checked == true) {
                newdata = data.filter((ele) => {
                    return ele.gender == "woman";
                })
                displaydata(newdata)
            }
            else if (woman.checked == false) {
                displaydata(data)
            }
        })
        man.addEventListener("click", () => {
            if (man.checked == true) {
                newdata = data.filter((ele) => {
                    return ele.gender == "man";
                })
                displaydata(newdata)
            }
            else if (man.checked == false) {
                displaydata(data)
            }
        })

    }
    function filterbyprice(data) {
        let lessthan = document.getElementById("lessthan");
        let morethan = document.getElementById("morethan");
        lessthan.addEventListener("click", () => {
            if (lessthan.checked == true) {
                let newdata = data.filter((ele) => {
                    return ele.price < 100;
                })
                displaydata(newdata)
            }
            else if (lessthan.checked == false) {
                displaydata(data)
            }
        })
        morethan.addEventListener("click", () => {
            if (morethan.checked == true) {
                let newdata = data.filter((ele) => {
                    return ele.price > 100;
                })
                displaydata(newdata)
            }
            else if (morethan.checked == false) {
                displaydata(data)
            }
        })
    }
    let cartdata = JSON.parse(localStorage.getItem("cartdata")) || []
    let count = document.getElementById("total")
    let numberofdata = document.getElementById("numberof")
    function displaydata(data) {
        count.textContent = data.length;
        numberofdata.textContent = data.length;
        resultbox.innerHTML = ""
        data.filter((ele, ind) => {
            let prodiv = document.createElement("div")
            let img = document.createElement("img")
            img.setAttribute("class", "proimage")
            img.src = ele.image;
            img.addEventListener("mouseenter", () => {
                img.src = "https://s7d2.scene7.com/is/image/aeo/0119_6413_469_b?$cat-main_large$&fmt=webp"
            })
            img.addEventListener("mouseleave", () => {
                img.src = ele.image;
            })
            let btn = document.createElement("button")
            btn.setAttribute("class", "pbtn")
            btn.textContent = "Quick Shop"
            btn.addEventListener("click", () => {
                if (duplicheck(ele) == true) {
                    alert("Product is already added in cart")
                }
                else {
                    cartdata.push({ ...ele, quantity: 1 })
                    localStorage.setItem("cartdata", JSON.stringify(cartdata))
                    alert("Product added to cart")
                }

            })
            let tagline = document.createElement("p")
            tagline.innerText = "New+Real Good";
            let name = document.createElement("h2")
            name.textContent = ele.title;
            name.addEventListener("click", () => {
                localStorage.setItem("inddata", JSON.stringify({ ...ele }))
                window.location.assign("product.html")
            })
            let pricediv = document.createElement("div")
            let price1 = document.createElement("h3")
            price1.setAttribute("class", "price1")
            price1.textContent = "$" + ele.price + "USD";
            let price2 = document.createElement("p")
            price2.setAttribute("class", "price2")
            price2.textContent = "$600 USD";
            pricediv.append(price1, price2)
            prodiv.append(img, btn, tagline, name, pricediv)
            resultbox.append(prodiv)
        })
    }
    function duplicheck(item) {
        for (let i = 0; i < cartdata.length; i++) {
            if (cartdata[i].id == item[i].id) {
                return true;
            }
        }
        return false;
    }
})
let plus1 = document.getElementById("plus1")
let checkbox1 = document.getElementById("checkbox1")
plus1.addEventListener("click", () => {
    checkbox1.style.display = "block";
})
let plus2 = document.getElementById("plus2")
let checkbox2 = document.getElementById("checkbox2")
plus2.addEventListener("click", () => {
    checkbox2.style.display = "block";
})
let plus3 = document.getElementById("plus3")
let radiobtn = document.getElementById("radio")
plus3.addEventListener("click", () => {
    radiobtn.style.display = "block";
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