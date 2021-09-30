const hamburger =  document.querySelector('#hamburger')
const navMobile = document.querySelector(".nav_mobile")


const toggleMenu = ()=>{
    console.log("clicked");
    if(navMobile.classList.contains("hide")){
        navMobile.classList.remove("hide")
        hamburger.src="./images/icon-close.svg"
    }
    else{
        navMobile.classList.add("hide")
        hamburger.src="./images/icon-hamburger.svg"
    }
    
}




hamburger.addEventListener("click",toggleMenu)
