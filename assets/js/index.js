$(document).ready(function () {
    //swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: "auto", //解決換行
        speed: 3000,
        loop: true,
        //loopedSlides: "number", //Defines how many slides before end/beginning it should rearrange (loop) slides. If not specified, defaults to slidesPerView
        //centeredSlides: true, //使swiper 居中
        allowTouchMove: false,
        spaceBetween: 0, //swiper 間隔距離
        
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        effect: 'slide',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
    });
});