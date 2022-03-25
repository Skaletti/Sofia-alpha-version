// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.init(document.querySelector('#my-scrollbar'));

new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
});