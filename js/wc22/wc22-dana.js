// jQuery(function() {
	'use strict';
	var stadCont = {
		'stad1': {
			"title": "Lusail Iconic Stadium",
			"text": "The Lusail Iconic Stadium will be the main venue of the 2022 FIFA World Cup. Aside from being the site of Group C, G, and H matches, it will also hold a match in every knockout round, including the championship game.",
			"img": "images/stadiums/primary-stdm/lusail-full.jpg",
			"others": ["images/stadiums/primary-stdm/al-bayt-full.jpg", "images/stadiums/primary-stdm/lusail-full.jpg", "images/stadiums/primary-stdm/lusail-full.jpg", "images/stadiums/primary-stdm/lusail-full.jpg"]
		},
		'stad2': {
			"title": "Al Bayt Stadium",
			"text": "With a capacity of 60,000, Al Bayt Stadium is the second largest venue of the 2022 FIFA World Cup. Three knockout round matches, as well as Group A, B, E, and F fixtures, will be played here.",
			"img": "images/stadiums/primary-stdm/al-bayt-full.jpg",
			"others": ["images/stadiums/primary-stdm/lusail-full.jpg", "images/stadiums/primary-stdm/al-bayt-full.jpg", "images/stadiums/primary-stdm/al-bayt-full.jpg"]
		},
		'stad3': {
			"title": "Khalifa International Stadium",
			"text": "The 45,000-plus-seater Khalifa International Stadium will host the third-place play-off and a round of 16 match. Six group stage encounters will also be played here.",
			"img": "images/stadiums/primary-stdm/khalifa-full.jpg",
			"others": ["images/stadiums/primary-stdm/lusail-full.jpg", "images/stadiums/primary-stdm/khalifa-full.jpg", "images/stadiums/primary-stdm/khalifa-full.jpg", "images/stadiums/primary-stdm/khalifa-full.jpg", "images/stadiums/primary-stdm/khalifa-full.jpg", "images/stadiums/primary-stdm/khalifa-full.jpg"]
		},
		'stad4': {
			"title": "Al Thumama Stadium",
			"text": "Al Thumama Stadium is one of two playing venues within Doha. The opening match, which is between the Netherlands and Senegal, will be held here, along with first and second round knockout round skirmishes.",
			"img": "images/stadiums/primary-stdm/al-thumama-full.jpg",
			"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
		},
		'stad5': {
			"title": "Education City Stadium",
			"text": "Education City Stadium is one of three locations in Al Rayyan where matches will be played. All of South Korea’s group stage matches and two knockout round clashes will be staged here.",
			"img": "images/stadiums/primary-stdm/education-city-full.jpg"
		},
		'stad6': {
			"title": "Ahmad bin Ali Stadium",
			"text": "Ahmad bin Ali Stadium is the fourth largest stadium according to capacity (44,740). It will house a match on round of 16, three on Group B, two on Group F, and one on Group E.",
			"img": "images/stadiums/primary-stdm/ahmad-bin-ali-full.jpg"
		},
		'stad7': {
			"title": "Stadium 974",
			"text": "Stadium 974 is one of the smallest stadiums for this World Cup, with a capacity of 40,000. Its name pertains to Qatar’s international phone country code.",
			"img": "images/stadiums/primary-stdm/974-full.jpg"
		},
		'stad8': {
			"title": "Al Janoub Stadium",
			"text": "Al Janoub Stadium in Al Wakrah is the only venue south of Doha. Seven matches will be staged here, in addition to a round of 16 contest.",
			"img": "images/stadiums/primary-stdm/al-janoub-full.jpg"
		}
	}

	var stadiumPopup = document.querySelector(".popup-stadium");
	var popupStadiumMainImg = document.querySelector(".popup-stadium-big-img");
	var imgCont = document.querySelector(".popup-stadium-swiper-img-cont");


	function pictureChange(imageSrc) {
		popupStadiumMainImg.src= imageSrc;
	}

	var slideStadium = document.querySelectorAll('.slide-stadium');

	for (var i = 0; i < slideStadium.length; i++) {
		$(slideStadium[i]).on("click", function() {
			stadiumPopup.style.display = "block";
			var slideNum = this.children[1].alt;
			var stadName = "stad"+slideNum;
			var popupTitle = document.querySelector(".popup-stadium-title-text");
			var popupText = document.querySelector(".popup-stadium-text");
	
			Object.entries(stadCont).map((obj) => {
				const key = obj[0];
				const val = obj[1];
				
	
				if(stadName === key){
					popupTitle.innerHTML = val.title;
					popupText.innerHTML = val.text;
					popupStadiumMainImg.src = val.img;
					var otherImages = val.others;
					
					for (var i=0; i < otherImages.length; i++) {
						var stadiumSlide = document.createElement('div');
						stadiumSlide.classList.add('swiper-slide', 'popup-stadium-slide');
						stadiumSlide.setAttribute("onclick", "pictureChange(this.children[0].getAttribute('src'))");
						var slideImg = document.createElement('img');
						slideImg.src = otherImages[i];
						
						imgCont.appendChild(stadiumSlide);
						stadiumSlide.appendChild(slideImg);
					}
				}
			});
		});
	}

	var closePopup = document.querySelector('.popup-stadium-close');

	$(closePopup).click(function(){
        stadiumPopup.style.display = "none";
    });

// });