const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector('.portfolio-gallery').children;
//console.log(items);
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {

        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            if (target == items[k].getAttribute("data-id")) {

                items[k].style.display = 'block';
            }
            if (target == "all") {

                items[k].style.display = 'block';
            }
        }
    });
}


const lightBox = document.querySelector(".lightbox")
const lightBoxImage = lightBox.querySelector("img"); // <-- change image 
const closelightBox = document.getElementById("close-lightBox");



closelightBox.addEventListener("click", function() {
    lightBox.classList.add("hide");
    lightBox.classList.remove("show");
});

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element) {
    element.querySelector(".fa-search-plus").addEventListener("click", function() {
        lightBox.classList.remove("hide");
        lightBox.classList.add("show");
        lightBoxImage.src = element.querySelector("img").getAttribute("src");
    });
});


// if you want to close lightbox clicking outside if image are then 
lightBox.addEventListener("click", function() {

    if (event.target != lightBoxImage) {
        lightBox.classList.add("hide");
        lightBox.classList.remove("show");
    } else {
        lightBox.classList.remove("hide");
        lightBox.classList.add("show");
    }
});

var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "inline-block";
}

//header fixed


window.addEventListener("scroll", function() {
    const scrollTop = document.querySelector("header");
    scrollTop.classList.toggle("sticky", window.scrollY > 0);
})

// navbar link
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");
a.forEach(function(element) {
    element.addEventListener("click", function() {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
    })
})

//menu (ham-burger)
const menu = document.querySelector(".menu");
menu.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");

});
let menuOpen = 'close';
menu.addEventListener('click', function() {
    if (menuOpen == 'close') {
        menu.classList.add('open');
        menuOpen = 'open';
    } else {
        menu.classList.remove('open');
        menuOpen = 'close';
    }
});