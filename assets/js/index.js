$(document).ready(function () {
    //swiper banner
    // const swiper = new Swiper('#swiperBanner', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });
    //swiper albums
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 3000,
        loop: true, //設置為true 時，swiper 數量需超過slidesPerView 設定數量的兩倍，才能成功
        slidesPerView: "auto", //決定能顯示幾個swiper 
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