
var swiper = new Swiper(".mySwiper", {    
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

    // 팝업창 클로즈(x) 버튼을 누르면 창이 꺼지게 하기
    const popup = document.getElementById("main_popup")
    var pop_close_btn = popup.querySelector(".main_window_close")

    pop_close_btn.addEventListener("click", a => {
        popup.style.display = "none";
    })

