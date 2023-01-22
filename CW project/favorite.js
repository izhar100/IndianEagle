let favdata=JSON.parse(localStorage.getItem("favdata"))||[]
let username=document.getElementById("username")
let favpage=document.getElementById("favpro")
displaydata(favdata)
function displaydata(data){
    console.log(data)
    favpage.innerHTML="";
    data.forEach((ele,ind)=>{
        let imgcard=document.createElement("div")
        let image=document.createElement("img")
        image.src=ele.image;
        let title=document.createElement("h4")
        title.textContent=ele.title;
        let price=document.createElement("h5")
        price.textContent="$"+ele.price+" USD";
        let remove=document.createElement("button")
        remove.textContent="Remove"
        remove.addEventListener("click",()=>{
            favdata=favdata.filter((element)=>{
                return ele.id!==element.id;
            })
            localStorage.setItem("favdata",JSON.stringify(favdata))
            displaydata(favdata)
        })
        imgcard.append(image,title,price,remove)
        favpage.append(imgcard)
    })
}
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