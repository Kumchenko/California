const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,

    // Auto-playing
    autoplay: {
        delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  let burger = document.querySelector("header .nav__btn_burger"),
      links  = document.querySelector("header .nav__links");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    links.classList.toggle("active");
  });