"use strict";
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


//Кнопка поиcка naw-bar

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


// VIDEO FUNCTION

$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
});

$(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


//  BENEFITS

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false;    // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();  // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;    // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();  // Высота окна браузера
        var d_height = $(document).height();    // Высота всего документа
        var e_height = $(countbox).outerHeight();   // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});


// SLIDER

(()=> {
    const linearCarousel = (el) => {
        const carouselElement =  el;
        let carouselItems = el.querySelectorAll('.carousel__item');
        let activeIndex = 0;

        const reAlignCarousel = () => {
            if(carouselItems.length == 0) {
                return;
            }
            Array.prototype.forEach.call(carouselItems, item => {
                item.classList.remove('carousel__item-prev', 'carousel__item-prev-prev', 'carousel__item-next', 'carousel__item-next-next', 'carousel__item--active')
            });

            if (activeIndex === 0) {
                carouselItems[carouselItems.length-1].classList.add('carousel__item-prev');
                carouselItems[carouselItems.length-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            } else if (activeIndex === 1) {
                carouselItems[0].classList.add('carousel__item-prev');
                carouselItems[carouselItems.length-1].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            } else if (activeIndex === carouselItems.length-2) {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[0].classList.add('carousel__item-next-next');
            } else if (activeIndex === carouselItems.length-1) {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[0].classList.add('carousel__item-next');
                carouselItems[1].classList.add('carousel__item-next-next');
            } else {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            }
            carouselItems[activeIndex].classList.add('carousel__item--active');
        }


        const cloneElementAndAppendToCarousel = (element) => {
            var clone = element.cloneNode(true);
            console.log(clone);
            carouselElement.appendChild(clone);
        }

        const moveToNextItem = () => {
            if(activeIndex == (carouselItems.length - 1)) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
            reAlignCarousel();
        }

        const moveToPrevItem = () => {
            if(activeIndex == 0) {
                activeIndex = carouselItems.length - 1;
            } else {
                activeIndex--;
            }
            reAlignCarousel();
        }

        const addButtonsToCarousel = () => {
            const prevButtonElement = document.createElement('div');
            prevButtonElement.classList.add('carousel__button-prev');

            const nextButtonElement = document.createElement('div');
            nextButtonElement.classList.add('carousel__button-next');

            prevButtonElement.addEventListener('click', moveToPrevItem);
            nextButtonElement.addEventListener('click', moveToNextItem);

            carouselElement.appendChild(prevButtonElement);
            carouselElement.appendChild(nextButtonElement);
        }

        const bindClickEventForItems = () => {
            carouselElement.addEventListener('click', e => {
                const targetElement = e.path.filter(element => element.classList && element.classList.contains('carousel__item'))[0];
                if(!targetElement)
                    return;
                const indexCSSClasses = ['carousel__item-next-next', 'carousel__item-next', 'carousel__item-prev', 'carousel__item-prev-prev'];
                const indexCSSClass = indexCSSClasses.filter(cssClass => targetElement.classList.contains(cssClass))[0];
                switch(indexCSSClass) {
                    case 'carousel__item-next-next':
                    case 'carousel__item-next':
                        moveToNextItem();
                        break;
                    case 'carousel__item-prev-prev':
                    case 'carousel__item-prev':
                        moveToPrevItem();
                }
            })
        }

        const initializeCarousel = () => {
            switch(carouselItems.length) {
                case 0:
                    return;
                case 1:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    break;
                case 2:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[1]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    break;
                case 3:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[1]);
                    break;
                case 4:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    break;
            }
            carouselItems = el.querySelectorAll('.carousel__item')
            reAlignCarousel();

            addButtonsToCarousel();

            bindClickEventForItems();
        }
        initializeCarousel();
        console.log('DAMAN', carouselItems[0])
    }
    linearCarousel(document.querySelector('.horizontal-carousel'));
})();


// Nav-bar

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
