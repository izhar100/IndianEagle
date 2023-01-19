let searched=JSON.parse(localStorage.getItem("searched"))
const searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click", () => {
    let resultbox = document.getElementById("right")
    async function fetchingdata() {
        let inp = searched;
        if(inp==null){
           inp = document.querySelector("#searchinp").value;
        }
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
    function filterbygender(data){
        let woman=document.getElementById("woman")
        let man=document.getElementById("man")
        woman.addEventListener("click",()=>{
            if(woman.checked==true){
                newdata=data.filter((ele)=>{
                    return ele.gender=="woman";
                })
                displaydata(newdata)
            }
            else if(woman.checked==false){
                displaydata(data)
            }
        })
        man.addEventListener("click",()=>{
            if(man.checked==true){
                newdata=data.filter((ele)=>{
                    return ele.gender=="man";
                })
                displaydata(newdata)
            }
            else if(man.checked==false){
                displaydata(data)
            }
        })

    }
    function filterbyprice(data){
        let lessthan=document.getElementById("lessthan");
        let morethan=document.getElementById("morethan");
        lessthan.addEventListener("click",()=>{
            if(lessthan.checked==true){
                let newdata=data.filter((ele)=>{
                    return ele.price<100;
                })
                displaydata(newdata)
            }
            else if(lessthan.checked==false){
                displaydata(data)
            } 
        })
        morethan.addEventListener("click",()=>{
            if(morethan.checked==true){
                let newdata=data.filter((ele)=>{
                    return ele.price>100;
                })
                displaydata(newdata)
            }
            else if(morethan.checked==false){
                displaydata(data)
            }
        })
    }
    let count = document.getElementById("total")
    function displaydata(data) {
        count.textContent = data.length;
        resultbox.innerHTML = ""
        data.filter((ele, ind) => {
            let prodiv = document.createElement("div")
            let img = document.createElement("img")
            img.setAttribute("class", "proimage")
            img.src = ele.image;
            let btn = document.createElement("button")
            btn.setAttribute("class", "pbtn")
            btn.textContent = "Quick Shop"
            let tagline = document.createElement("p")
            tagline.innerText = "New+Real Good";
            let name = document.createElement("h2")
            name.textContent = ele.title;
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
})