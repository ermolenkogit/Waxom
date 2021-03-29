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

