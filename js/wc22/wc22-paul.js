'use strict';

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Para di na mag update every year, declare na lang ng month and date
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/21/",
        wc = dayMonth + yyyy;

    // var today = new Date("Nov 21, 2022  12:00:0").getTime();
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > wc) {
      wc = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(wc).getTime(),
        x = setInterval(function() {    

          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        }, 0)
    }()
);


// SWIPER
var thumbSwiper = new Swiper('.swiper--stdm', {
  // Optional parameters
  slidesPerView: "auto",
  direction: 'horizontal',
  draggable: true,
  loop: false,

  // If we need pagination
  pagination: {
      clickable: true,
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.wc-thumb--next',
    prevEl: '.wc-thumb--prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 16,
    },
    1023: {
      slidesPerView: "auto",
      spaceBetween: 16,
    }
  }
});

const swipeMblDisable = (remSwiper) => {
  if (remSwiper.matches) { // If media query matches
    // thumbSwiper.destroy();
    console.log("Thumb Swiper Removal is enable")
  }
}
setTimeout(function(){
  thumbSwiper.init;
}, 1000)

let remSwiper = window.matchMedia("(max-width: 767px)")
swipeMblDisable(remSwiper) // Call listener function at run time
remSwiper.addListener(swipeMblDisable) // Attach listener function on state changes