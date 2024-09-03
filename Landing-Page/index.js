let sign_in_btn = document.querySelector("#sign-in-btn")
let sign_up_btn = document.querySelector("#sign-up-btn")
let container = document.querySelector(".body-content")
let sign_in_container = document.querySelector(".signin")
let sign_up_container = document.querySelector(".signup")

sign_in_container.style.zIndex = 11;
sign_up_btn.addEventListener("click",()=>{
    container.classList.add("sign-up-mode")
    sign_in_container.style.zIndex = 1;
    sign_up_container.style.zIndex = 11; 
})

sign_in_btn.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode");
    sign_in_container.style.zIndex = 11;
    sign_up_container.style.zIndex = 1;
})

var username = document.getElementById('username').value;

