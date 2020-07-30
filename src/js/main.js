const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio__gallery").children;

// Recuperation et d'ajout de la classe active
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(){
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");

        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";

            if(target == items[k].getAttribute("data-id")){
                console.log(items[k]);
                items[k].style.display = "block";
            }
            if(target == "all"){
                items[k].style.display = "block";
            }
            
        }
    })
    
}

// Create a pop up

const lightbox = document.querySelector(".lightbox");
const closeLightBox = document.querySelector(".lightbox__close");
const lightboxDescription = lightbox.querySelector(".ligthbox__description");
const description = lightbox.querySelector(".description");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = lightbox.querySelector(".lightbox__title");

closeLightBox.addEventListener("click", function() {
    lightbox.classList.add("hide");
    lightbox.classList.remove("show")

});
lightbox.addEventListener("click", function() {
    if( event.target != lightboxImage && event.target != lightboxDescription){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})
const gallery = document.querySelector(".portfolio__gallery");
const galleryItem = document.querySelectorAll(".gallery__item");

galleryItem.forEach(function(element) {
    element.querySelector(".fa-eye").addEventListener("click", function() {
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src = element.querySelector("img").getAttribute("src");
        lightboxTitle.textContent = element.querySelector(".title").textContent;
        description.textContent = element.querySelector(".description").textContent
    })
});

// Header fixing
window.onscroll = function(){
    const docScrollTop = document.documentElement.scrollTop;
    if(window.innerWidth > 991){
        if(docScrollTop > 100){
            document.querySelector("header").classList.add("header__fixed");
            document.querySelector(".logo").classList.add("logo--color");
        }
        else{
            document.querySelector("header").classList.remove("header__fixed");
            document.querySelector(".logo").classList.remove("logo--color");
        }
    }
}


//Navbar links
const navBar = document.querySelector(".navbar");
      links = navBar.querySelectorAll(".menu__links");


links.forEach(function(element) {
    element.addEventListener("click", function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
    })
})


// Menu Ham-burger displaying
const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
})
