jQuery(function() {
	'use strict';

	$(window).on("load", function(){
		// Carousel start
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
		// Carousel end

		// Odds
		var swiperOddsLive = new Swiper(".swiper-odds--live", {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination--odds-live",
				clickable: true
			},
			freeMode: {
				enabled: true,
				sticky: true,
			},
			simulateTouch: true,
			breakpoints: {
				
			}
		});

		var swiperOddsUpcoming = new Swiper(".swiper-odds--upcoming", {
			slidesPerView: "auto",
				pagination: false,
				navigation: {
					nextEl: ".swiper-odds-next",
					prevEl: ".swiper-odds-prev",
				},
				breakpoints: {
					320: {
						slidesPerGroup: 1,
						spaceBetween: 8
					},
					590: {
						slidesPerGroup: 2,
						spaceBetween: 8,
					},
					870: {
						slidesPerGroup: 3,
						spaceBetween: 8,
					},
					1024: {
						slidesPerGroup: 3,
						spaceBetween: 16
					},
					1360: {
						slidesPerGroup: 4,
						spaceBetween: 16
					}
				}
		});

		var sliderRouletteGames = new Swiper(".swiper--laliga-slots", {
			slidesPerView: "auto",
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			slidesPerGroupAuto: true,
			freeMode: {
				enabled: true,
				sticky: true,
			},
			simulateTouch: true,
			breakpoints: {
				0: {
					spaceBetween: 8,
				},
				1024: {
					spaceBetween: 16,
				}
			}
		});
		setTimeout(function(){
			swiperOddsLive.init();
			swiperOddsUpcoming.init();
			sliderRouletteGames.init();
		}, 1000)
	});

	//tabs
	const wc22Content = document.querySelector(".wc22");
	const wc22Tabs = wc22Content.querySelectorAll(".wc22-tabs__tab");
	const wc22TabItems = wc22Content.querySelectorAll(".wc22-tab-items__item");

	function displayActiveTab(current) {
		for (let i = 0; i < wc22TabItems.length; i++) {
			current === i
				? wc22Tabs[i].classList.add("act")
				: wc22Tabs[i].classList.remove("act");
			current === i
				? wc22TabItems[i].classList.add("act")
				: wc22TabItems[i].classList.remove("act");
		}
	}
	displayActiveTab(0);

	wc22Content.addEventListener("click", (e) => {
		if (e.target.className === "wc22-tabs__tab") {
			for (let i = 0; i < wc22Tabs.length; i++) {
				if (e.target === wc22Tabs[i]) {
					displayActiveTab(i);
					break;
				}
			}
		}
	});

	//tabs - overview
	const wc22OverviewContent = document.querySelector(".wc22-tab-items__item--1");
	const wc22OverviewTabs = wc22OverviewContent.querySelectorAll(".wc22-tab-items__item--1__subtabs__tab");
	const wc22OverviewTabItems = wc22OverviewContent.querySelectorAll(".wc22-tab-items__item--1__subs__item");

	function displayOverviewActiveTab(current) {
		for (let i = 0; i < wc22OverviewTabItems.length; i++) {
			current === i
				? wc22OverviewTabs[i].classList.add("act")
				: wc22OverviewTabs[i].classList.remove("act");
			current === i
				? wc22OverviewTabItems[i].classList.add("act")
				: wc22OverviewTabItems[i].classList.remove("act");
		}
	}
	displayOverviewActiveTab(0);

	wc22OverviewContent.addEventListener("click", (e) => {
		if (e.target.className === "wc22-tab-items__item--1__subtabs__tab") {
			for (let i = 0; i < wc22OverviewTabs.length; i++) {
				if (e.target === wc22OverviewTabs[i]) {
					displayOverviewActiveTab(i);
					break;
				}
			}
		}
	});

	

});