// jQuery(function() {
	'use strict';
	var stadLangs = {
		stadCont: {
			stad1: {
				"title": "Lusail Iconic Stadium",
				"text": "The Lusail Iconic Stadium will be the main venue of the 2022 FIFA World Cup. Aside from being the site of Group C, G, and H matches, it will also hold a match in every knockout round, including the championship game.",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "Al Bayt Stadium",
				"text": "With a capacity of 60,000, Al Bayt Stadium is the second largest venue of the 2022 FIFA World Cup. Three knockout round matches, as well as Group A, B, E, and F fixtures, will be played here.",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "Khalifa International Stadium",
				"text": "The 45,000-plus-seater Khalifa International Stadium will host the third-place play-off and a round of 16 match. Six group stage encounters will also be played here.",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "Al Thumama Stadium",
				"text": "Al Thumama Stadium is one of two playing venues within Doha. The opening match, which is between the Netherlands and Senegal, will be held here, along with first and second round knockout round skirmishes.",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "Education City Stadium",
				"text": "Education City Stadium is one of three locations in Al Rayyan where matches will be played. All of South Korea’s group stage matches and two knockout round clashes will be staged here.",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "Ahmad bin Ali Stadium",
				"text": "Ahmad bin Ali Stadium is the fourth largest stadium according to capacity (44,740). It will house a match on round of 16, three on Group B, two on Group F, and one on Group E.",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "Stadium 974",
				"text": "Stadium 974 is one of the smallest stadiums for this World Cup, with a capacity of 40,000. Its name pertains to Qatar’s international phone country code.",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "Al Janoub Stadium",
				"text": "Al Janoub Stadium in Al Wakrah is the only venue south of Doha. Seven matches will be staged here, in addition to a round of 16 contest.",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContID: {
			stad1: {
				"title": "Stadion Iconic Lusail",
				"text": "Stadion Ikonik Lusail akan menjadi tempat utama Piala Dunia FIFA 2022. Selain sebagai tempat pertandingan di setiap babak sistem gugur, termasuk pertandingan kejuaraan.",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "Stadion Al Bayt",
				"text": "Dengan kapasitas 60.000, Stadion Al Bayt adalah tempat terbesar kedua Piala Dunia FIFA 2022. Tiga pertandingan babak sistem gugur, serta pertandingan Grup A, B, E, dan F, akan dimainkan disini.",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "Stadion Internasional Khalifa",
				"text": "Stadion Internasional Khalifa yang berkapasitas lebih dari 45.000 tempat duduk akan menjadi tuan rumah pertandingan perebutan tempat ketiga dan babak 16 besar. Enam pertemuan penyisihan grup juga akan dimainkan disini.",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "Stadion Al Thumama",
				"text": "Stadion Al Thumama adalah salah satu dari dua tempat bermain di Doha. Pertandingan pembuka antara Belanda dan Senegal akan diadakan disini, bersama dengan pertempuran babak sistem gugur pertama dan kedua.",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "Stadion Education City",
				"text": "Stadion Education City adalah salah satu dari tiga lokasi di Al Rayyan. Semua pertandingan penyisihan grup Korea Selatan dan dua pertandingan babak sistem gugur akan dimainkan disini.",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "Stadion Ahmad bin Ali",
				"text": "Ahmad bin Ali Stadium adalah stadion terbesar keempat dengan kapasitas (44.740). Ini akan menjadi tempat pertandingan di babak 16 besar, tiga di Grup B, dua di Grup F, dan satu di Grup E.",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "Stadion 974",
				"text": "Stadium 974 adalah salah satu stadion terkecil untuk acara Piala Dunia. Stadion 974 memiliki kapasitas 40.000. Namanya berkaitan dengan kode negara telepon internasional Qatar.",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "Stadion Al Janoub",
				"text": "Stadion Al Janoub di Al Wakrah adalah satu-satunya tempat di selatan Doha. Selain babak 16 besar, tujuh pertandingan akan digelar di sini.",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContCN: {
			stad1: {
				"title": "卢塞尔标志性体育场",
				"text": "卢塞尔标志性体育场将成为 2022 年国际足联世界杯的主会场。除了作为C组、G组和H组比赛的场地外，它还将在包括冠军赛在内的每一轮淘汰赛中举行一场比赛。",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "巴伊特足球场",
				"text": "巴伊特足球场可容纳 60,000 人，是 2022 年 FIFA 世界杯的第二大场馆。三场淘汰赛，以及A、B、E、F组的比赛，将在这里进行。",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "哈利法国际足球场",
				"text": "拥有 45,000 多个座位的哈利法国际足球场，将举办季军附加赛和 16 轮比赛。六场小组赛也将在这里进行。",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "图玛玛足球场",
				"text": "图玛玛足球场是多哈的两个比赛场地之一。荷兰和塞内加尔之间的首场比赛将在这里举行，还有第一轮和第二轮的淘汰赛。",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "教育城足球场",
				"text": "教育城体育场是赖扬体育俱乐部将进行比赛的三个地点之一。韩国所有的小组赛和两轮淘汰赛都将在这里上演。",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "艾哈迈德·本·阿里足球场",
				"text": "艾哈迈德·本·阿里足球场是容量第四大的体育场（44,740人）。它将在第 16 轮进行一场比赛，B 组三场，F 组两场，E 组一场。",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "974足球场",
				"text": "974足球场是本届世界杯最小的体育场之一，可容纳4万人。它的名字与卡塔尔的国际电话国家代码有关。",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "沃克拉足球场",
				"text": "沃克拉体育俱乐部的沃克拉足球场是多哈以南的唯一场馆。七场比赛将在这里上演，此外还有一轮 16 场比赛。",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContTH: {
			stad1: {
				"title": "สนามกีฬาลูเซล ไอคอนิก",
				"text": "สนามกีฬาลูเซล ไอคอนิก จะเป็นสถานที่หลักของการแข่งขันฟุตบอลโลก 2022 นอกจากจะเป็นสถานที่จัดการแข่งขันของกลุ่ม C, G และ H แล้ว ยังจัดการแข่งขันในทุกรอบน็อคเอาท์ รวมถึงเกมชิงแชมป์อีกด้วย",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "สนามกีฬาอัล บัยต์",
				"text": "ด้วยความจุ 60,000 สนามกีฬาอัล บัยต์ เป็นสถานที่ใหญ่เป็นอันดับ 2 ของฟุตบอลโลก 2022 การแข่งขันรอบน็อคเอาท์ 3 แมตช์ รวมถึงกลุ่ม A, B, E และ F จะเล่นที่นี่",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "สนามกีฬานานาชาติคาลิฟา",
				"text": "สนามกีฬานานาชาติคาลิฟาซึ่งมีความจุมากกว่า 45,000 ที่นั่ง จะเป็นเจ้าภาพเพลย์ออฟอันดับ 3 และการแข่งขันรอบ 16 ทีมสุดท้าย การเผชิญหน้ารอบแบ่งกลุ่ม 6 ครั้งจะเล่นที่นี่ด้วย",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "สนามกีฬาอัลทูมามา",
				"text": "สนามกีฬาอัลทูมามา เป็น 1 ใน 2 สถานที่เล่นในโดฮา การแข่งขันนัดแรกซึ่งอยู่ระหว่างเนเธอร์แลนด์และเซเนกัลจะจัดขึ้นที่นี่พร้อมกับการต่อสู้รอบน็อคเอาท์รอบแรกและรอบที่ 2",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "สนามกีฬาเอดูเคชั่น ซิตี้",
				"text": "สนามกีฬาเอดูเคชั่น ซิตี้ เป็นหนึ่งใน 3 สถานที่ในอัล เรย์ยาน ที่จะแข่งขันกัน การแข่งขันรอบแบ่งกลุ่มของเกาหลีใต้ทั้งหมดและการปะทะรอบน็อคเอาท์ 2 ครั้งจะจัดขึ้นที่นี่",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "สนามกีฬาอาเหม็ด บิน อาลี",
				"text": "สนามกีฬาอาเหม็ด บิน อาลี เป็นสนามกีฬาที่ใหญ่เป็นอันดับ 4 ตามความจุ (44,740) ซึ่งจะจัดการแข่งขันในรอบ 16 ทีมสุดท้ายในกลุ่ม B  3 ครั้ง 2 เกมในกลุ่ม F และอีกครั้งในกลุ่ม E",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "สนามกีฬา 974",
				"text": "สนามกีฬา 974 เป็นหนึ่งในสเตเดียมที่เล็กที่สุดสำหรับฟุตบอลโลกครั้งนี้ ด้วยความจุ 40,000 ชื่อของมันคือรหัสโทรศัพท์ระหว่างประเทศของกาตาร์",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "Al Janoub Stadium",
				"text": "สนามกีฬาอัลจานูบ ในอัล วาครา เป็นสถานที่แห่งเดียวทางตอนใต้ของโดฮา จะมีการแข่งขัน 7 นัดที่นี่ นอกเหนือจากการแข่งขันรอบ 16 ทีมสุดท้าย",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContVN: {
			stad1: {
				"title": "Sân vận động Lusail Iconic",
				"text": "Lusail Iconic sẽ là sân khấu chính của FIFA World Cup 2022. Ngoài các trận cầu ở bảng C, G và H, đây còn là nơi diễn ra một trận trong tất cả các vòng loại trực tiếp, bao gồm cả trận chung kết.",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "Sân vận động Al Bayt",
				"text": "Với sức chứa 60,000 người, Al Bayt là sân vận động lớn thứ hai ở kỳ World Cup 2022. Ba trận đấu ở vòng loại trực tiếp, và các trận cầu ở bảng A, B, E và F đều sẽ diễn ra tại đây.",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "Sân vận động Khalifa International",
				"text": "SVĐ sở hữu 45,000 chỗ ngồi, Khalifa International sẽ là nơi diễn ra trận tranh hạng ba và một trận thuộc vòng 16 đội. Ngoài ra còn có sáu trận cầu ở vòng bảng diễn ra tại đây.",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "Sân vận động Al Thumama",
				"text": "Al Thumama là một trong hai sân vận động thuộc Doha. Trận cầu mở màn giữa tuyển Hà Lan và Senegal sẽ diễn ra tại đây, còn có trận cầu thứ nhất và thứ hai của vòng loại trực tiếp. ",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "Sân vận động Education City",
				"text": "Education City là một trong ba địa điểm tại Al Rayyan nơi các trận đấu được tổ chức. Tất cả những trận cầu của tuyển Hàn Quốc ở vòng bảng, và hai trận đấu ở vòng knock-out đều sẽ diễn ra tại đây.",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "Sân vận động Ahmad bin Ali",
				"text": "Ahmad bin Ali là một trong bốn SVĐ lớn nhất khi tính về sức chứa (44,740 chỗ ngồi). Đây là nơi diễn ra một trận cầu ở vòng 16 đội, ba trận bảng B, hai trận bảng F và một trận ở bảng E.",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "Sân vận động 974",
				"text": "974 là một trong những SVĐ nhỏ nhất ở kì World Cup này, với sức chứa chỉ 40,000.Tên của SVĐ này được đặt theo mã vùng điện thoại quốc tế của Qatar. ",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "Al Janoub Stadium",
				"text": "Al Janoub là sân vận động nằm tại Al Wakrah, và cũng là sân duy nhất ở phía Nam Doha. Có bảy trận đấu sẽ diễn ra tại đây, ngoài ra còn có một trận của vòng 16 đội. ",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContKR: {
			stad1: {
				"title": "루사일 아이코닉 스타디움",
				"text": "루사일 아이코닉 스타디움은 2022 FIFA 월드컵의 주요 경기 장소입니다. C조, G조, H조의 경기 장소와 동시에 녹아웃 스테이지 및 챔피언십 경기도 치러질 장소입니다.",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "알 베이트 스타디움",
				"text": "60,000명을 수용할 수 있는 경기장으로 2022 FIFA 월드컵의 경기장 중 2번째의 크기를 자랑합니다. 세 개의 녹아웃 경기와 A조, B조, E조, F조의 경기가 치러질 장소입니다.",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "칼리파 인터내셔널 스타디움",
				"text": "45,000명 이상을 수용할 수 있는 경기장으로 3위 결정전과 16강전이 치러질 경기장입니다. 6개의 조별 경기도 이곳에서 진행됩니다. ",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "알 투마마 스타디움",
				"text": "알 투마마 스타디움은 도하 내 두 곳의 경기장 중 한 경기장입니다. 개막전인 네덜란드와 세네갈의 경기와 첫 두 번의 녹아웃 경기가 치러질 경기장입니다.",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "에듀케이션 시티 스타디움",
				"text": "에듀케이션 시티 스타디움은 알라얀에 위치한 세 곳의 경기장 중 한 경기장으로 대한민국의 모든 경기와 두 개의 녹아웃 경기가 치러질 경기장입니다.",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "아흐마드 빈 알리 스타디움",
				"text": "수용 인원(44,740명) 기준으로 네 번째로 큰 경기장입니다. 16강전, B조의 세 경기, F조의 두 경기, E조의 한 경기가 진행됩니다.",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "974 스타디움",
				"text": "40,000명을 수용할 수 있는 이번 월드컵에서 가장 작은 경기장 중 하나입니다. 카타르의 국가 번호에서 이름을 따왔습니다.",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "알 자눕 스타디움",
				"text": "알와크라의 알 자눕 스타디움은 도하의 남쪽에 위치한 유일한 경기장입니다. 16강 경기와 함께 7개의 경기가 이곳에서 진행됩니다.",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
		stadContJP: {
			stad1: {
				"title": "ルサイル・アイコニック・スタジアム",
				"text": "ルサイル・アイコニック・スタジアムは、2022年FIFAワールドカップのメイン会場となる。グループC, G, Hの試合以外にも、勝ち抜き戦、決勝戦のステージでもある。",
				"img": "images/stadiums/primary-stdm/lusail-1.jpg",
				"others": ["images/stadiums/primary-stdm/lusail-1.jpg", "images/stadiums/primary-stdm/lusail-2.jpg", "images/stadiums/primary-stdm/lusail-3.jpg", "images/stadiums/primary-stdm/lusail-4.jpg"]
			},
			stad2: {
				"title": "アル・バイト・スタジアム",
				"text": "60,000の座席数をもつアル・バイト・スタジアムは、2022年FIFAワールドカップにおいて、2番目の規模となる会場だ。グループA、B、E、Fのほかにも、勝ち抜き戦3戦が開催される予定。",
				"img": "images/stadiums/primary-stdm/al-bayt-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-bayt-1.jpg", "images/stadiums/primary-stdm/al-bayt-2.jpg", "images/stadiums/primary-stdm/al-bayt-3.jpg", "images/stadiums/primary-stdm/al-bayt-4.jpg"]
			},
			stad3: {
				"title": "ハリーファ国際スタジアム",
				"text": "ハリーファ国際スタジアムは、45,000座席の規模で、3位決定戦およびラウンド16を開催する。6つグループステージも主催する。",
				"img": "images/stadiums/primary-stdm/khalifa-1.jpg",
				"others": ["images/stadiums/primary-stdm/khalifa-1.jpg", "images/stadiums/primary-stdm/khalifa-2.jpg", "images/stadiums/primary-stdm/khalifa-3.jpg", "images/stadiums/primary-stdm/khalifa-4.jpg"]
			},
			stad4: {
				"title": "アル・トゥマーマ・スタジアム",
				"text": "アル・トゥマーマ・スタジアムは、ドーハーで二つのプレイ会場の一つ。オランダVSセネガルの開幕戦の会場として以外にも、勝ち抜き戦を2試合予定している。",
				"img": "images/stadiums/primary-stdm/al-thumama-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-thumama-1.jpg", "images/stadiums/primary-stdm/al-thumama-2.jpg", "images/stadiums/primary-stdm/al-thumama-3.jpg", "images/stadiums/primary-stdm/al-thumama-4.jpg"]
			},
			stad5: {
				"title": "エデュケーション・シティ・スタジアム",
				"text": "エデュケーション・シティ・スタジアムは、ライヤーンに拠点する3つの試合会場の一つ。すべての韓国グループステージ対戦および勝ち抜き戦を2試合予定している。",
				"img": "images/stadiums/primary-stdm/education-city-1.jpg",
				"others": ["images/stadiums/primary-stdm/education-city-1.jpg", "images/stadiums/primary-stdm/education-city-2.jpg", "images/stadiums/primary-stdm/education-city-3.jpg", "images/stadiums/primary-stdm/education-city-4.jpg"]
			},
			stad6: {
				"title": "アフメド・ビン＝アリー・スタジアム",
				"text": "アフメド・ビン＝アリー・スタジアムは、4番目に大きく座席数44,740。ラウンド16が開催される予定で、Group Bで3試合、Group Fでは2試合、Group Eでは1試合。",
				"img": "images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg",
				"others": ["images/stadiums/primary-stdm/ahmad-bin-ali-1.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-2.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-3.jpg", "images/stadiums/primary-stdm/ahmad-bin-ali-4.jpg"]
			},
			stad7: {
				"title": "ステージアム974",
				"text": "ステージアム974は、今年のW杯では最も小さいスタジアムで、その座席数は40,000ほどだ。「974」は、カタールの国番号を表している。",
				"img": "images/stadiums/primary-stdm/974-1.jpg",
				"others": ["images/stadiums/primary-stdm/974-1.jpg", "images/stadiums/primary-stdm/974-2.jpg", "images/stadiums/primary-stdm/974-3.jpg", "images/stadiums/primary-stdm/974-4.jpg"]
			},
			stad8: {
				"title": "Al Janoub Stadium",
				"text": "アル＝ワクラにあるアル・ジャヌーブ・スタジアムは、ドーハ南部に位置するスタジアム。ここでは、7試合、ラウンド16が繰り広げられる予定だ。",
				"img": "images/stadiums/primary-stdm/al-janoub-1.jpg",
				"others": ["images/stadiums/primary-stdm/al-janoub-1.jpg", "images/stadiums/primary-stdm/al-janoub-2.jpg", "images/stadiums/primary-stdm/al-janoub-3.jpg", "images/stadiums/primary-stdm/al-janoub-4.jpg"]
			}
		},
	}

	var stadiumPopup = document.querySelector(".popup-stadium");
	var popupStadiumMainImg = document.querySelector(".popup-stadium-big-img");
	var imgCont = document.querySelector(".popup-stadium-swiper-img-cont");
	var dataLang = (state.user.locale).slice(-2);
	// var dataLang = "ID";

	function getLang(lang) {
		switch(lang) {
			case 'EN':
				return "stadCont";
				break;
			case 'ID':
				return "stadContID";
				break;
			case 'CN':
				return "stadContCN";
				break;
			case 'TH':
				return "stadContTH";
				break;
			case 'VN':
				return "stadContVN";
				break;
			case 'KR':
				return "stadContKR";
				break;
			case 'JP':
				return "stadContJP";
				break;
			default:
				return "stadCont";
		}
	}

	var translatedContent = getLang(dataLang);
	console.log(translatedContent);

	var slideStadium = document.querySelectorAll('.slide-stadium');

	for (var i = 0; i < slideStadium.length; i++) {
		$(slideStadium[i]).on("click", function() {
			stadiumPopup.style.display = "block";
			document.body.classList.add('overflowHidden');
			var slideNum = this.children[1].alt;
			var stadName = "stad"+slideNum;
			var popupTitle = document.querySelector(".popup-stadium-title-text");
			var popupText = document.querySelector(".popup-stadium-text");

			Object.entries(stadLangs).map((ent) => {
				const lang = ent[0];
				const value = ent[1];

				if(translatedContent === lang){
					Object.entries(value).map((obj) => {
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
								var slideImg = document.createElement('img');
								slideImg.src = otherImages[i];
								
								imgCont.appendChild(stadiumSlide);
								stadiumSlide.appendChild(slideImg);
							}
		
							var stadSlide = document.querySelectorAll('.popup-stadium-slide');
		
							for (var i = 0; i < stadSlide.length; i++) {
								$(stadSlide[i]).on("click", function() {
									var imageSrc = this.children[0].getAttribute('src');
									popupStadiumMainImg.src = imageSrc;
								});
							}
						}
					});
				}
			});
		});
	}

	var closePopup = document.querySelector('.popup-stadium-close');

	$(closePopup).click(function(){
        stadiumPopup.style.display = "none";
		document.body.classList.remove('overflowHidden');
		var first = imgCont.firstElementChild;
        while (first) {
            first.remove();
            first = imgCont.firstElementChild;
        }
    });

// });