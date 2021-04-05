// Настройка карусели

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        // autoplay:true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

// Настройка butoon up

$(document).ready(function() {
    var button = $('#button-up');
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Якорь js

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});


//Кнопка поика naw-bar

(function () {
    $(document).on('click', '.search-button', function () {
        $(this).parent().parent().toggleClass('active');
    });
})();


//Меняет цвет при нажатии
//
// $( "#icon-prise" ).click(function() {
//     $('#icon-prise').css('color', '#007bff');
// });


// IMPROVED JAVASCRIPT & ADDED A FEW CHANGES

const slider = document.querySelector(".browser-sliders");
const slides = document.querySelectorAll(".browser-slider");
const button = document.querySelectorAll(".button");

let current = Math.floor(Math.random()*slides.length);
let prev = current > 0 ? current - 1 : slides.length - 1;
let next = current < slides.length - 1 ? current + 1 : 0;

const update = () => {
    slides.forEach(it => {
        it.classList.remove("active");
    it.classList.remove("prev");
    it.classList.remove("next");
});

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current > 0 ? current - 1 : slides.length - 1;
    next = current < slides.length - 1 ? current + 1 : 0;

    update();
}

update();

