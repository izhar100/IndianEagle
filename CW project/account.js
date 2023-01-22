let data=JSON.parse(localStorage.getItem("logindata"))||{}
let signupBtn = document.getElementById("singupBtn");
let signinBtn = document.getElementById("singinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
function signinfunction() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    let email = document.getElementById("mail")
    let password = document.getElementById("pass")
    if(email.value=="" || password.value==""){
        alert("Please Sign In to proceed")
    }
    else if(data.email!==email.value || data.password!==password.value){
        alert("Wrong Credentials!")
    }
    else if(data.email==email.value && data.password==password.value){
        alert("Login Success")
        window.location.assign("cart.html")
    }
}
function signupfunction() {
    let name = document.getElementById("name")
    let email = document.getElementById("mail")
    let password = document.getElementById("pass")
    if(name.value=="" && email.value=="" && password.value==""){
        alert("welcome! create an account to proceed")
    }
    else if(name.value=="" || name.value==""|| password.value==""){
        alert("Please enter all details");
    }
    else{
        data={
            name:name.value,
            email:email.value,
            password:password.value
        }
        localStorage.setItem("logindata",JSON.stringify(data))
        alert("Account created sucessfully! Sign In to proceed")
    }
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Create Account";
}