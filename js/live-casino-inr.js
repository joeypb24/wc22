$(document).ready(function () {
  "use strict";

  $(window).on("load", function () {
    
      const carouselWrapper = document.querySelector(".carousel-wrapper");
      let isLoop;
      if ( carouselWrapper.querySelectorAll(".carousel-item").length > 1 ) {
        isLoop = true;
      } else {
        isLoop = false;
      }

      var carouselLiveCasino = new Swiper(".carousel-wrapper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        watchSlidesProgress: true,
        slideVisibleClass: "swiper-slide-visible",
        pagination: {
          el: ".swiper-pagination",
          clickable: !0,
          type: "bullets"
        },
        autoplay: {
           delay: 8e3,
           disableOnInteraction: !1,
           pauseOnMouseEnter: !0
        },
        allowTouchMove: !0,
        loop: isLoop
      });

      $(document).ready(function() {
        // hide carousel image then show on ready
        $(".carousel-item > div > picture > img").show();
      });

      var sliderFavorites = new Swiper(".swiper--favorites", {
        slidesPerView: "auto",
        watchSlidesProgress: true,
        slidesPerGroupSkip: 1,
        slidesPerGroupAuto: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          540: {
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          720: {
            spaceBetween: 8,
            slidesPerGroup: 4
          },
          1024: {
            spaceBetween: 16,
            slidesPerGroup: 4
          },
          1140: {
            spaceBetween: 16,
            slidesPerGroup: 5
          },
          1360: {
            spaceBetween: 16,
            slidesPerGroup: 6
          }
        }
      });

      var sliderFavoritesHome = new Swiper(".swiper--favorites--home", {
        slidesPerView: "auto",
        watchSlidesProgress: true,
        slidesPerGroupAuto: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          540: {
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          720: {
            spaceBetween: 8,
            slidesPerGroup: 4
          },
          1024: {
            spaceBetween: 16,
            slidesPerGroupSkip: 2,
            slidesPerGroup: 4
          },
          1140: {
            spaceBetween: 16,
            slidesPerGroupSkip: 3,
            slidesPerGroup: 5
          },
          1360: {
            spaceBetween: 16,
            slidesPerGroupSkip: 4,
            slidesPerGroup: 6
          }
        }
      });

      var sliderIndianGames = new Swiper(".swiper--indian-games", {
        slidesPerView: "auto",
        slidesPerGroupAuto: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: {
          enabled: true,
          sticky: true,
        },
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
            // slidesPerGroup: 1
          },
          540: {
            spaceBetween: 8,
            // slidesPerGroup: 2
          },
          720: {
            spaceBetween: 8,
            // slidesPerGroup: 3
          },
          1024: {
            spaceBetween: 16,
            // slidesPerGroup: 3
          },
          1150: {
            spaceBetween: 16,
            // slidesPerGroup: 4
          },
          1360: {
            spaceBetween: 16,
            // slidesPerGroup: 5
          }
        }
      });

      var sliderProviders = new Swiper(".swiper--providers", {
        slidesPerView: "auto",
        slidesPerGroupAuto: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper--providers__pagination',
          clickable: true,
          type: 'bullets'
        },
        // freeMode: {
        //   enabled: true,
        //   sticky: true,
        // },
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          540: {
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          690: {
            spaceBetween: 8,
            slidesPerGroup: 4
          },
          900: {
            spaceBetween: 8,
            slidesPerGroup: 5
          },
          1024: {
            spaceBetween: 16,
            slidesPerGroup: 4
          },
          1150: {
            spaceBetween: 16,
            slidesPerGroup: 5
          },
          1360: {
            spaceBetween: 16,
            slidesPerGroup: 6
          }
        }
      });

      var sliderOthers = new Swiper(".swiper--others", {
        slidesPerView: "auto",
        // slidesPerGroup: 1,
        slidesPerGroupAuto: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // freeMode: {
        //   enabled: true,
        //   sticky: true,
        // },
        simulateTouch: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          540: {
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          720: {
            spaceBetween: 8,
            slidesPerGroup: 4
          },
          1024: {
            spaceBetween: 16,
            slidesPerGroup: 4
          },
          1150: {
            spaceBetween: 16,
            slidesPerGroup: 5
          },
          1360: {
            spaceBetween: 16,
            slidesPerGroup: 6
          }
        }
      });

      if(window.innerWidth < 1024){
        sliderOthers.destroy;
      } else {
        sliderOthers.init;
      }
      $(window).on("scroll", function(){
        if(window.innerWidth < 1024){
          sliderOthers.destroy;
        } else {
          sliderOthers.init;
        }
      });
      
      
  });

  let swiperOthersTabletItems = $(".swiper--others--tablet > div").length;
  let x;
  let y;

  function showMoreLessOthersItems(){
   
    if(window.innerWidth >= 960 && window.innerWidth < 1024){
      $(".swiper--others--tablet > div").removeClass("active");
      x = 10;
      y = 10;
    } 
    if (window.innerWidth >= 770 && window.innerWidth < 960){
      $(".swiper--others--tablet > div").removeClass("active");
      x = 8;
      y = 8;
    }
    if (window.innerWidth >= 560 && window.innerWidth < 770) {
      $(".swiper--others--tablet > div").removeClass("active");
      x = 6;
      y = 6;
    }
    if (window.innerWidth < 560) {
      $(".swiper--others--tablet > div").removeClass("active");
      x = 6;
      y = 6;
    }
    $(".swiper--others--tablet > div:lt(" + x + ")").addClass("active");
    
  }
  $(".casino-back-to-top-button").hide();
  $(".show--more").click(function () {
    x = x + y <= swiperOthersTabletItems ? x + y : swiperOthersTabletItems;
    $(".swiper--others--tablet > div:lt(" + x + ")").addClass("active");
    if (x == swiperOthersTabletItems) {
      x = y;
      $(".show--more").removeClass("active");
      // $(".show--less").addClass("active");
      $(".casino-back-to-top-button").show();
    }
    $([document.documentElement, document.body]).animate({
			scrollTop: $(".show.active").offset().top 
	  }, 10);
  });
  // $(".show--less").click(function () {
  //   showMoreLessOthersItems(); 
  //   // $(".swiper--others--tablet > div")
  //   //   .not(":lt(" + x + ")")
  //   //   .removeClass("active");
  //   // $(".show--less").addClass("active");
  //   // if (x == y) {
  //     // $(".show--less").removeClass("active");
  //     $(".show--more").addClass("active");
  //   // }
  //   $([document.documentElement, document.body]).animate({
	// 		scrollTop: $(".area--others").offset().top - 200
	//   }, 10);
  // });

  showMoreLessOthersItems(); 

  $(".casino-back-to-top-button").on("click", function(){
    $([document.documentElement, document.body]).animate({
			scrollTop: $("body").offset().top
	  }, 100);
  });

  $(window).on("resize", function(){
    showMoreLessOthersItems();

    if(window.innerWidth < 1024){
      $(".casino-back-to-top-button").hide();
      $(".show--more").addClass("active");
    }
  });

  // console.log(swiperOthersTabletItems);

  // function setRowsTiles(){
  //   let others = $(".swiper--others--tablet");
  //   let othersTileHeight = $(".swiper--others--tablet > div").height();

  //   let rowsNum;
  //   let rowsTiles;
  //   if(window.innerWidth >= 960 && window.innerWidth < 1024){
  //     rowsNum = 2;
  //     rowsTiles = 5;
  //   } 
  //   if (window.innerWidth >= 770 && window.innerWidth < 960){
  //     rowsNum = 2;
  //     rowsTiles = 4;
  //   }
  //   if (window.innerWidth >= 560 && window.innerWidth < 770) {
  //     rowsNum = 3;
  //     rowsTiles = 3;
  //   }
  //   if (window.innerWidth < 560) {
  //     rowsNum = 3;
  //     rowsTiles = 2;
  //   }

  //   let currentOthersHeight = (othersTileHeight * rowsNum) + (8 * rowsNum);

  //   $(others).css("height", currentOthersHeight + "px");

  //   let othersHeight = $(".swiper--others--tablet").height();

  //   let othersTilesHidden = $(".swiper--others--tablet > div").filter(function () {
  //       return $(this).position().top + $(this).height() > othersHeight;
  //   }).length;

  //   console.log(othersTilesHidden);


  //   let multiplier = 2;
  //   $(".show--more").on("click", function(){   
  //     if(othersTilesHidden <= rowsTiles ){
  //       $(others).css("height", "auto");  
  //     } else {
  //       $(others).css("height", currentOthersHeight * multiplier + "px");  
  //     }  

  //     othersTilesHidden -= (rowsTiles * rowsNum);

  //     multiplier++;

  //     if(othersTilesHidden <= 0){
  //       othersTilesHidden = 0;
  //       $(this).removeClass("active");
  //       $(".show--less").addClass("active");
  //     }
  //     console.log(othersTilesHidden);
  //   });

  //   $(".show--less").on("click", function(){   
  //     $(".show--more").addClass("active");
  //     setRowsTiles();
  //     othersTilesHidden = $(".swiper--others--tablet > div").filter(function () {
  //       return $(this).position().top + $(this).height() > othersHeight;
  //     }).length;
  //     $(this).removeClass("active");
  //   });

  // }

  // setRowsTiles();

  // $(window).on("resize", function(){
  //   setRowsTiles();
  // });
});
