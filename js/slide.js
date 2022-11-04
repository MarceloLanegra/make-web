export function slideBanner() {
  window.addEventListener("load", function () {
    new Swiper(
      document.querySelector(".banner-slides").querySelector(".mySwiper"),
      {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        }
      }
    );
  });
}

export function slideMarcas() {
  window.addEventListener("load", function () {
    new Swiper(
      document.querySelector(".marcas-slides").querySelector(".mySwiper"),
      {
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      }
    );
  });
}

slideBanner();
slideMarcas();
