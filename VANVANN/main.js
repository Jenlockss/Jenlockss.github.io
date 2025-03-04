const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 60 ){
        nav.classList.add("scrolled");
    }else{
        nav.classLis.remove("scrolled");
    }
})
