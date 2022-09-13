jQuery(function($) {
	'use strict';
    const teams2 = {
		"en-US": [
		  { id: "ar", name: "argentina", short: "arg", group: "c" },
		  { id: "at", name: "australia", short: "aus", group: "d" },
		  { id: "be", name: "belgium", short: "bel", group: "f" },
		  { id: "br", name: "brazil", short: "bra", group: "g" },
		  { id: "ca", name: "canada", short: "can", group: "f" },
		  { id: "cm", name: "cameroon", short: "cmr", group: "g" },
		  { id: "cr", name: "costa rica", short: "crc", group: "e" },
		  { id: "hr", name: "croatia", short: "cro", group: "f" },
		  { id: "dk", name: "denmark", short: "den", group: "d" },
		  { id: "en", name: "england", short: "eng", group: "b" },
		  { id: "ec", name: "ecuador", short: "ecu", group: "a" },
		  { id: "fr", name: "france", short: "fra", group: "d" },
		  { id: "de", name: "germany", short: "ger", group: "e" },
		  { id: "gh", name: "ghana", short: "gha", group: "h" },
		  { id: "ir", name: "iran", short: "irn", group: "b" },
		  { id: "jp", name: "japan", short: "jpn", group: "e" },
		  { id: "mx", name: "mexico", short: "mex", group: "c" },
		  { id: "ma", name: "morocco", short: "mar", group: "f" },
		  { id: "nl", name: "netherlands", short: "ned", group: "a" },
		  { id: "pl", name: "poland", short: "pol", group: "c" },
		  { id: "pt", name: "portugal", short: "por", group: "h" },
		  { id: "qa", name: "qatar", short: "qat", group: "a" },
		  { id: "sa", name: "saudi arabia", short: "ksa", group: "c" },
		  { id: "sn", name: "senegal", short: "sen", group: "a" },
		  { id: "rs", name: "serbia", short: "srb", group: "g" },
		  { id: "kor", name: "Korea Republic", short: "kor", group: "h" },
		  { id: "es", name: "spain", short: "esp", group: "e" },
		  { id: "ch", name: "switzerland", short: "sui", group: "g" },
		  { id: "tn", name: "tunisia", short: "tun", group: "d" },
		  { id: "us", name: "USA", short: "usa", group: "b" },
		  { id: "uy", name: "uruguay", short: "uru", group: "h" },
		  { id: "ws", name: "wales", short: "wal", group: "b" },
		],
		"ko-KR": [
		  { id: "ar", name: "아르헨티나", short: "아르헨티나", group: "c" },
		  { id: "at", name: "호주", short: "호주", group: "d" },
		  { id: "be", name: "벨기에", short: "벨기에", group: "f" },
		  { id: "br", name: "브라질", short: "브라질", group: "g" },
		  { id: "ca", name: "캐나다", short: "캐나다", group: "f" },
		  { id: "cm", name: "카메룬", short: "카메룬", group: "g" },
		  { id: "cr", name: "코스타리카", short: "코스타리카", group: "e" },
		  { id: "hr", name: "크로아티아", short: "크로아티아", group: "f" },
		  { id: "dk", name: "덴마크", short: "덴마크", group: "d" },
		  { id: "en", name: "잉글랜드", short: "eng", group: "b" },
		  { id: "ec", name: "에콰도르", short: "에콰도르", group: "a" },
		  { id: "fr", name: "프랑스", short: "fra", group: "d" },
		  { id: "de", name: "독일", short: "ger", group: "e" },
		  { id: "gh", name: "가나", short: "gha", group: "h" },
		  { id: "ir", name: "이란", short: "irn", group: "b" },
		  { id: "jp", name: "일본", short: "jpn", group: "e" },
		  { id: "mx", name: "멕시코", short: "mex", group: "c" },
		  { id: "ma", name: "모로코", short: "mar", group: "f" },
		  { id: "nl", name: "네덜란드", short: "ned", group: "a" },
		  { id: "pl", name: "poland", short: "pol", group: "c" },
		  { id: "pt", name: "portugal", short: "por", group: "h" },
		  { id: "qa", name: "qatar", short: "qat", group: "a" },
		  { id: "sa", name: "saudi arabia", short: "ksa", group: "c" },
		  { id: "sn", name: "senegal", short: "sen", group: "a" },
		  { id: "rs", name: "serbia", short: "srb", group: "g" },
		  { id: "kor", name: "Korea Republic", short: "kor", group: "h" },
		  { id: "es", name: "spain", short: "esp", group: "e" },
		  { id: "ch", name: "switzerland", short: "sui", group: "g" },
		  { id: "tn", name: "tunisia", short: "tun", group: "d" },
		  { id: "us", name: "USA", short: "usa", group: "b" },
		  { id: "uy", name: "uruguay", short: "uru", group: "h" },
		  { id: "ws", name: "wales", short: "wal", group: "b" },
		],
		"vi-VN": [
		  { id: "ar", name: "Argentina", short: "arg", group: "c" },
		  { id: "at", name: "Úc", short: "Úc", group: "d" },
		  { id: "be", name: "Bỉ", short: "Bỉ", group: "f" },
		  { id: "br", name: "Brazil", short: "bra", group: "g" },
		  { id: "ca", name: "Canada", short: "can", group: "f" },
		  { id: "cm", name: "Cameroon", short: "cmr", group: "g" },
		  { id: "cr", name: "Costa Rica", short: "cri", group: "e" },
		  { id: "hr", name: "Croatia", short: "cro", group: "f" },
		  { id: "dk", name: "Đan Mạch", short: "den", group: "d" },
		  { id: "en", name: "Anh", short: "Anh", group: "b" },
		  { id: "ec", name: "Ecuador", short: "ecu", group: "a" },
		  { id: "fr", name: "Pháp", short: "fra", group: "d" },
		  { id: "de", name: "Đức", short: "Đức", group: "e" },
		  { id: "gh", name: "Ghana", short: "gha", group: "h" },
		  { id: "ir", name: "Iran", short: "irn", group: "b" },
		  { id: "jp", name: "Nhật Bản", short: "NHẬT", group: "e" },
		  { id: "mx", name: "Mexico", short: "mex", group: "c" },
		  { id: "ma", name: "Ma-Rốc", short: "mar", group: "f" },
		  { id: "nl", name: "Hà Lan", short: "hl", group: "a" },
		  { id: "pl", name: "Ba Lan", short: "pol", group: "c" },
		  { id: "pt", name: "Bồ Đào Nha", short: "BĐN", group: "h" },
		  { id: "qa", name: "Qatar", short: "Qatar", group: "a" },
		  { id: "sa", name: "Ả Rập", short: "ksa", group: "c" },
		  { id: "sn", name: "Senegal", short: "sen", group: "a" },
		  { id: "rs", name: "Serbia", short: "srb", group: "g" },
		  { id: "kor", name: "Hàn Quốc", short: "hq", group: "h" },
		  { id: "es", name: "Tây Ban Nha", short: "tbn", group: "e" },
		  { id: "ch", name: "Thụy Sĩ", short: "che", group: "g" },
		  { id: "tn", name: "Tunisia", short: "tun", group: "d" },
		  { id: "us", name: "Mỹ", short: "usa", group: "b" },
		  { id: "uy", name: "Uruguay", short: "urg", group: "h" },
		  { id: "ws", name: "Wales", short: "Wales", group: "b" },
		],
		"th-TH": [
			{ id: "ar", name: "อาร์เจนตินา", short: "อาร์เจนตินา", group: "c" },
			{ id: "at", name: "ออสเตรเลีย", short: "ออสเตรเลีย", group: "d" },
			{ id: "be", name: "เบลเยียม", short: "เบลเยียม", group: "f" },
			{ id: "br", name: "บราซิล", short: "บราซิล", group: "g" },
			{ id: "ca", name: "แคนาดา", short: "แคนาดา", group: "f" },
			{ id: "cm", name: "แคเมอรูน", short: "แคเมอรูน", group: "g" },
			{ id: "cr", name: "คอสตาริกา", short: "คอสตาริกา", group: "e" },
			{ id: "hr", name: "โครเอเชีย", short: "โครเอเชีย", group: "f" },
			{ id: "dk", name: "เดนมาร์ก", short: "เดนมาร์ก", group: "d" },
			{ id: "en", name: "อังกฤษ", short: "อังกฤษ", group: "b" },
			{ id: "ec", name: "เอกวาดอร์", short: "เอกวาดอร์", group: "a" },
			{ id: "fr", name: "ฝรั่งเศส", short: "ฝรั่งเศส", group: "d" },
			{ id: "de", name: "เยอรมนี", short: "เยอรมนี", group: "e" },
			{ id: "gh", name: "กานา", short: "กานา", group: "h" },
			{ id: "ir", name: "อิหร่าน", short: "อิหร่าน", group: "b" },
			{ id: "jp", name: "ญี่ปุ่น", short: "ญี่ปุ่น", group: "e" },
			{ id: "mx", name: "เม็กซิโก", short: "เม็กซิโก", group: "c" },
			{ id: "ma", name: "โมร็อกโก", short: "โมร็อกโก", group: "f" },
			{ id: "nl", name: "เนเธอร์แลนด์", short: "เนเธอร์แลนด์", group: "a" },
			{ id: "pl", name: "โปแลนด์", short: "โปแลนด์", group: "c" },
			{ id: "pt", name: "โปรตุเกส", short: "โปรตุเกส", group: "h" },
			{ id: "qa", name: "กาตาร์", short: "กาตาร์", group: "a" },
			{ id: "sa", name: "ซาอุดิอาราเบีย", short: "ซาอุดิอาราเบีย", group: "c" },
			{ id: "sn", name: "เซเนกัล", short: "เซเนกัล", group: "a" },
			{ id: "rs", name: "เซอร์เบีย", short: "เซอร์เบีย", group: "g" },
			{ id: "kor", name: "เกาหลีใต้", short: "เกาหลีใต้", group: "h" },
			{ id: "es", name: "สเปน", short: "สเปน", group: "e" },
			{ id: "ch", name: "สวิตเซอร์แลนด์", short: "สวิตเซอร์แลนด์", group: "g" },
			{ id: "tn", name: "ตูนิเซีย", short: "ตูนิเซีย", group: "d" },
			{ id: "us", name: "สหรัฐอเมริกา", short: "usa", group: "b" },
			{ id: "uy", name: "อุรุกวัย", short: "อุรุกวัย", group: "h" },
			{ id: "ws", name: "เวลส์", short: "เวลส์", group: "b" },
		],
	};
	const popupContent = {
		"en-US":{
			requiredEmail: "Email is required.",
			invalidEmail: "Email provided is invalid.",
		},
		"id-ID":{
			requiredEmail: "Email wajib diisi",
			invalidEmail: "Email tidak valid.",
		},
		"th-TH":{
			requiredEmail: "อีเมลล์จำเป็นต้องระบุ",
			invalidEmail: "ที่อยู่อีเมลล์ไม่ถูกต้อง",
		},
		"vi-VN":{
			requiredEmail: "Địa chỉ email là bắt buộc",
			invalidEmail: "Địa chỉ email không hợp lệ",
		},
		"zh-CN":{
			requiredEmail: "邮箱必填",
			invalidEmail: "电子邮件地址无效。",
		},
		"ja-JP":{
			requiredEmail: "Eメールを入力してください",
			invalidEmail: "入力されたEメールアドレスは無効です",
		},
		"ko-KR":{
			requiredEmail: "이메일을 입력하세요.",
			invalidEmail: "이메일이 유효하지 않습니다.",
		},
	}

	var apiPredictionProd = 'https://script.google.com/macros/s/AKfycbwiyY4hzdXB9c9Xaxogow1t7pnRcx1g9aC4cTSiKWa7Xz-kUGozpuzpsnZwm77oSb64WQ/exec';
	var apiPredictionUAT = '';
	var isPredictionProd = true;
	var htmlLang = $('html').attr('lang');

    var urlParamLang = state.user.locale;
    var preAuth = state.user.authenticated;
    var date = new Date();
	var grequiredEmail, ginvalidEmail;

    /**Add data-url start */
    var ddWrapAuth = (preAuth === "False") ? "/register":"";
    $('.dd-wrap').attr('data-url', ddWrapAuth);
    /**Add data-url end */

    /**Add Username start */
    var playerName = $('#burger-welcome-auth-player-name').text();
    var username = (playerName.length > 0) ? playerName : "";
    /**Add Username end */

	if(urlParamLang == null) {
		urlParamLang = 'en-US';
		fetchLangJson(urlParamLang);
	} else {
		fetchLangJson(urlParamLang);
	}


	let langList;

	var predictionJson;
	let teamListResult;
	let teamGroupArr = [];

	function fetchLangJson(param1){
		Object.entries(param1).map(obj => {
			const key   = obj[0];
			const value = obj[1];

			if(urlParamLang == key){
				Object.entries(value).map(obj2 => {
					const key1   = obj2[0];
					const value1 = obj2[1];

					$('[data-txt="'+key1+'"]').html(value1);
					$('[data-placeholder="'+key1+'"]').attr("placeholder", value1);
					$('[data-placeholder-d="'+key1+'"]').attr("data-placeholder-d", value1);
					$('[data-placeholder-m="'+key1+'"]').attr("data-placeholder-m", value1);
					$('[data-cta="'+key1+'"]').attr("href", value1);
				})
			}
		});
	}

	fetchLangJson(langcontent);

	// jQuery.fn.extend({
	// 	initDropdown: function () {
	// 		$(this).each(function(){
	// 			var that = this;
	// 			var clickDetect = 0;
	// 			$(that).find('.dropdown-selected, .dropdown-selection').mouseenter(function(){
	// 				clickDetect = 1;
	// 			});
	// 			$(that).find('.dropdown-selected, .dropdown-selection').mouseleave(function(){
	// 				clickDetect = 0;
	// 			});
	// 			$(that).find('.dropdown-selected').click(function(){
	// 				if(!$(this).hasClass('active')) {
	// 					$(this).addClass('active');
	// 				}
	// 				else {
	// 					$(this).removeClass('active');
	// 				}
	// 			});
	// 			$(document).click(function(){
	// 				if(clickDetect == 0) {
	// 					$(that).find('.dropdown-selected').removeClass('active');
	// 				}
	// 			});
	// 			$(that).find('.dropdown-selection dd').click(function(){
	// 				var hiddenVal = ($(this).attr('data-value') != 'placeholder') ? $(this).attr('data-value') : '';
	// 				$(that).find('.dropdown-selected').text($(this).text()).attr('data-country', $(this).attr('data-country'));
	// 				$(that).find('input[type="hidden"]').val(hiddenVal);
	// 				$(that).removeClass('valid');
	// 				if($(that).find('input[type="hidden"]').val() != '') {
	// 					$(that).addClass('valid');
	// 				}
	// 				$(that).find('.dropdown-selected').removeClass('active');
	// 			});
				
	// 			var dropdownHiddenField = $(that).find('input[type="hidden"]').attr('name');
	// 			$(that).find('.dropdown-selected').text($(that).find('dd:eq(0)').text()).attr('data-country', $(that).find('dd:eq(0)').attr('data-country'));
	// 			if($(that).find('dd:eq(0)').attr('data-value') == 'placeholder') {
	// 				$(that).find('input[type="hidden"]').val('');
	// 			}
	// 			else {
	// 				$(that).find('input[type="hidden"]').val($(that).find('dd:eq(0)').attr('data-value'));
	// 			}
	// 		});
	// 	}
	// });
	// $('.dropdown-box').initDropdown();

	
	/**Team List START */

	function fetchTeamJson(param1){
		Object.entries(param1).map(obj => {
			const key   = obj[0];
			const value = obj[1];

			if(urlParamLang == key){
				Object.entries(value).map(obj2 => {
					const key1   = obj2[0];
					const value1 = obj2[1];
					if(teamGroupArr.indexOf(value1.group) === -1) {
						teamGroupArr.push(value1.group);
						teamGroupArr[value1.group] = [];
					}
					(teamGroupArr[value1.group]).push('<div class="dd-option icon icon-'+value1.id+'" data-val="'+value1.id+'"><span class="txt">'+value1.short+'</span></div>');
				});
			}
		});
		bracketResponsive();
	}
	fetchTeamJson(teams)

	/**Team List END */
	
	/**Break HTML START */
	var prevDesk;

	function bracketResponsive(){
		let scroll = ($(window).width() >= 560) ? $('.bracket-wrap.x-inner').removeClass('x-inner') : $('.bracket-wrap').addClass('x-inner');
		scroll;
		
		var bracketFormat = ($(window).width() >= 768) ? bracketFormat = 'desktop' : bracketFormat = 'mobile';
		if(typeof prevDesk == "undefined" || prevDesk != bracketFormat) {
			prevDesk = bracketFormat;
			$('.bracket-wrap').load('views/pred-dd-'+bracketFormat+'.html', function(){
	
				$('.dd-wrap').each(function(i){
					var ddGroups = $(this).attr('data-groups');
					var ddColGroups = $(this).attr('data-colgroup');
					ddGroups = ddGroups.split(",");
					let ddListElem = $(this).find('.dd-option-wrap .list');

					/*Add class start*/
					if(ddColGroups == undefined || ddColGroups == "w-semi" || ddColGroups == "finals" || ddColGroups == "e-semi"){
						$(this).addClass('dd-disabled');
					}
					/*Add class end*/

					for(var i=0;i<ddGroups.length;i++) {
						ddListElem.append(teamGroupArr[ddGroups[i]]);
					}
				});
				// $('.dd-option-wrap .scrollbar-inner').scrollbar();
				if(urlParamLang) {
					if(urlParamLang != 'id-ID' && urlParamLang != 'vn-VI' && urlParamLang != 'th-TH') {
						urlParamLang = 'en-US';
					}
					fetchLangJson(urlParamLang);
				}
			});
		}
	}

	$(window).on('resize',function(){
		bracketResponsive();
	});
	/**Break HTML END */

	$(document).on('click', '.dd-wrap', function(){
		$('.dd-wrap').not(this).removeClass('active');
		$(this).toggleClass('active');
		if($(this).hasClass('active')) {
			$(this).closest('.bracket').addClass('active');
			$('.bracket-scroller-x').removeClass('scroll-holder scroll-x');
			if($(window).width() <= 480) {
				$('body').attr('data-popupactive', 'true');
			}
		} else {
			$(this).closest('.bracket').removeClass('active');
			$('.bracket-scroller-x').addClass('scroll-holder scroll-x');
			$('body').removeAttr('data-popupactive');
		}
	});

	$(document).on('click mouseup', '.dd-wrap .dd-option', function(){
		let ddVal = $(this).data('val');
		let ddTxt = $(this).find('.txt').text(); 
		
		$(this).closest('.dd-wrap').find(".dd-selected[class*='icon']").removeClass (function (index, css) {
		   return (css.match (/(^|\s)icon\S+/g) || []).join(' ');
		});
		$(this).closest('.dd-wrap').find('.dd-selected').removeClass('placeholder').addClass('icon icon-'+ddVal);
		$(this).closest('.dd-wrap').find('.dd-selected').attr('data-val', ddVal);
		$(this).closest('.dd-wrap').find('.dd-selected .txt').text(ddTxt);
		$(this).closest('.dd-wrap').find('.dd-selected input').val(ddVal);
		
		let counter = 0;
		$('.dd-wrap').each(function(){
			counter += $(this).find('.dd-selected[data-val]').length;
		});
		if(counter >= 15) {
			$('.cta-area .btn.btn-submit-prediction.inactive').removeClass('inactive');
		}
	});

	$(document).on('mouseup', function(e) {
		let container = $(".dd-wrap");
		if(!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() >= 481) {
			$('.dd-wrap, .bracket').removeClass('active');
			$('.bracket-scroller-x').addClass('scroll-holder scroll-x');
		}
	});

	$(document).on('keyup change', '.dd-wrap .dd-selected input', function(){
		var inputVal = $(this).val();
		var ddWrap = $(this).closest('.dd-wrap');
		var inputField = this;
		var result = $(inputField).val().toLowerCase();
		var wordsToBold = result.split(' ');
		
		if($(inputField).val() != '') {
			Object.entries(teamListResult.teams).map(obj => {
				const key   = obj[0];
				const value = obj[1];
				var dataVal = value.name;
				var checkRes = result.toLowerCase();
				
				if((dataVal.toLowerCase()).includes(checkRes)) {
					$(ddWrap).find('.dd-option[data-val="'+value.id+'"]').removeClass('input-hidden');
				} else {
					$(ddWrap).find('.dd-option[data-val="'+value.id+'"]').addClass('input-hidden');
				}
			});
		}
	});

	$(document).on('mouseup', '.dd-wrap .dd-option', function(){
		let ddWrapSelVal = $(this).closest('.dd-wrap').find('.dd-selected').attr('data-val');
		let ddWrapSelf = $(this).closest('.dd-wrap').attr('data-self');
		let ddWrapColGroup = $(this).closest('.dd-wrap').attr('data-colgroup');
		let ddWrapTarget = $(this).closest('.dd-wrap').attr('data-target');
		let ddWrapPrvTarget = $(this).closest('.dd-wrap').attr('data-prvtarget');
		let selTeamsArr = [];
		let selTeamsPrvArr = [];

		addSelected($(this));
		
		$('.dd-wrap[data-self="'+ddWrapTarget+'"] .dd-option').addClass('hidden');
		$('.dd-wrap[data-target="'+ddWrapTarget+'"]').each(function(){
			let ddVal = $(this).find('.dd-selected').attr('data-val');
			selTeamsArr.push(ddVal);
		});
		
		$('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-option').each(function(){
			let ddVal = $(this).attr('data-val');
			if(($.inArray(ddVal, selTeamsArr)) != -1) {
				$(this).removeClass('hidden');
			}
		});
		autoHeightDDOption(ddWrapTarget);
		
		//prev
		if(typeof ddWrapPrvTarget !== "undefined") {
			let ddWrapPrvTargetArr = ddWrapPrvTarget.split(",");
			$.each(ddWrapPrvTargetArr, function(key, value){
				$('.dd-wrap[data-self="'+value.trim()+'"]').each(function(){
					let ddVal = $(this).find('.dd-selected').attr('data-val');
					selTeamsPrvArr.push(ddVal);
				});
			});
			
			let ddSelectedPrv = $('.dd-wrap[data-self="'+ddWrapSelf+'"]').find('.dd-selected').attr('data-val');
			if(($.inArray(ddSelectedPrv, selTeamsPrvArr)) == -1 && $.inArray(undefined, selTeamsPrvArr) == -1) {
				$.each(ddWrapPrvTargetArr, function(key, value){
					$('.dd-wrap[data-self="'+value.trim()+'"]').find('.dd-selected').removeAttr('data-val').addClass('placeholder').find('.txt').text('');
					$('.dd-wrap[data-self="'+value.trim()+'"]').find('.dd-selected').removeClass(function (index, className) {
						$(this).removeClass('icon');						
						return (className.match (/(^|\s)icon\S+/g) || []).join(' ');
					});
				});
			}
		}
		
		//next
		let removeDisabled = $('.dd-wrap.dd-disabled[data-self="'+ddWrapTarget+'"]');
		if($('.dd-wrap[data-self="'+ddWrapSelf+'"]').length >= 2) {
			$('.dd-wrap[data-self="'+ddWrapSelf+'"]').each(function(){
				let ddVal = $(this).find('.dd-selected').attr('data-val');
				selTeamsArr.push(ddVal);
			});
			
			let ddSelected = $('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').attr('data-val');
			removeDisabled.removeClass('dd-disabled');
			if(($.inArray(ddSelected, selTeamsArr)) == -1 && $.inArray(undefined, selTeamsArr) == -1) {
				$('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').removeAttr('data-val').addClass('placeholder').find('.txt').text('');
				$('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').removeClass(function (index, className) {
					$(this).removeClass('icon');
					return (className.match (/(^|\s)icon\S+/g) || []).join(' ');
				});
			}
		} else {
			$('.dd-wrap[data-colgroup="'+ddWrapColGroup+'"]').each(function(){
				let ddVal = $(this).find('.dd-selected').attr('data-val');
				selTeamsArr.push(ddVal);
			});
			let ddSelected = $('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').attr('data-val');
			removeDisabled.removeClass('dd-disabled');
			if(($.inArray(ddSelected, selTeamsArr)) == -1 && $.inArray(undefined, selTeamsArr) == -1) {
				$('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').removeAttr('data-val').addClass('placeholder').find('.txt').text('');
				$('.dd-wrap[data-self="'+ddWrapTarget+'"]').find('.dd-selected').removeClass(function (index, className) {
					$(this).removeClass('icon');
					return (className.match (/(^|\s)icon\S+/g) || []).join(' ');
				});
			}
		}
		
		//distinct col group
		let bracketClass = $(this).closest('.bracket').attr('class');
		bracketClass = bracketClass.split(' ');
		$('.'+bracketClass[1]+' .dd-wrap').each(function(){
			if(ddWrapSelVal == $(this).find('.dd-selected').attr('data-val')) {
				$(this).find('.dd-selected').removeAttr('data-val').addClass('placeholder').find('.txt').text('');
				$(this).find('.dd-selected').removeClass(function (index, className) {
					$(this).removeClass('icon');
					return (className.match (/(^|\s)icon\S+/g) || []).join(' ');
				});
			}
		});
	});

	/*Add Selected Class Start*/
	function addSelected(param){
		let dditem = param.closest('.dd-wrap').attr('data-item');

		$(document).on('click', '.dd-wrap[data-item="'+dditem+'"] .dd-option.icon', function(e){
			e.preventDefault();
			$('.dd-wrap[data-item="'+dditem+'"] .dd-option.icon.selected').removeClass('selected');
			$(this).addClass('selected');
		});
	}
	/*Add Selected Class Remove*/

	function autoHeightDDOption(ddWrap) {
		let ddOptionLength = $('.dd-wrap[data-self="'+ddWrap+'"]').find('.dd-option:not(.hidden)').length;
		let accumulateHeight = ddOptionLength * $('.dd-option').height();
		$('.dd-wrap[data-self="'+ddWrap+'"] .list').height(accumulateHeight);
	}

	$(document).on("click", ".btn-submit-prediction", function () {
		let match_49 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_50 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_53 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_54 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_51 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_52 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_55 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_56 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_57 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_58 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_59 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_60 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_61 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_62 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_64 = capitalizedUpperCase($('.bracket.champion .dd-wrap .dd-selected .txt').text());

		predictionJson = {
			"r16_1": {
				"match_49": match_49,
				"match_50": match_50
			},
			"r16_2": {
				"match_53": match_53,
				"match_54": match_54
			},
			"r16_3": {
				"match_51": match_51,
				"match_52": match_52
			},
			"r16_4": {
				"match_55": match_55,
				"match_56": match_56
			},
			"qf1": {
				"match_57": match_57,
				"match_58": match_58
			},
			"qf2": {
				"match_59": match_59,
				"match_60": match_60
			},
			"sf": {
				"match_61": match_61,
				"match_62": match_62
			},
			"f": {
				"match_64": match_64
			}
		};
		SavePrediction();

		$('.btn-submit-prediction').addClass('inactive');
	});

	function SavePrediction(){
		var errMessage = "There was an error during saving prediction details. Please try again.";

		var data = 'Timestamp=' + date;
		  data += '&username=' + username;
		  data += '&Match_49=' + predictionJson.r16_1.match_49;
		  data += '&Match_50=' + predictionJson.r16_1.match_50;
		  data += '&Match_53=' + predictionJson.r16_2.match_53;
		  data += '&Match_54=' + predictionJson.r16_2.match_54;
		  data += '&Match_51=' + predictionJson.r16_3.match_51;
		  data += '&Match_52=' + predictionJson.r16_3.match_52;
		  data += '&Match_55=' + predictionJson.r16_4.match_55;
		  data += '&Match_56=' + predictionJson.r16_4.match_56;
		  data += '&Match_57=' + predictionJson.qf1.match_57;
		  data += '&Match_58=' + predictionJson.qf1.match_58;
		  data += '&Match_59=' + predictionJson.qf2.match_59;
		  data += '&Match_60=' + predictionJson.qf2.match_60;
		  data += '&Match_61=' + predictionJson.sf.match_61;
		  data += '&Match_62=' + predictionJson.sf.match_62;
		  data += '&Final=' + predictionJson.f.match_64;

		var uri = ApiPrediction();

		$.ajax({
			url: uri,
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
			type: "post",
			data: data,
			contentType: 'multipart/form-data',
			// contentType: "application/javascript",
        	// dataType: "jsonp",
			success: function (res) {
				var stats = (res.result === "success") ? 'true' : 'false';
				openCongratsPopup(stats);
			},
			error: function () {
				console.log(errMessage);
			}
		});
		// openCongratsPopup('true');
	}

	function ApiPrediction(){
		if(isPredictionProd){
			return apiPredictionProd; //PROD
		}else{
			return apiPredictionUAT;
		}
	}

	function openCongratsPopup(args){
		$('.wc22-modals').addClass('act');
		var modalPred = $('.wc22-modals__lbox--pred');
		var modalPredBody, modalPredFooter;
		var modalPredImg = (args == 'false') ? 'cross':'check';
		var modalPredBigText = (args == 'false') ? 'Something went wrong!':'Your prediction has been placed!';
		var modalPredBtnText = (args == 'false') ? 'Ok':'Submit';
		var modalPredBtnClass = (args == 'false') ? 'btn--default':'btn-send-email';
		modalPred.addClass('act');


		Object.entries(popupContent).map(objerr =>{
			const key = objerr[0];
			const val = objerr[1];

			if(key === htmlLang)
				ginvalidEmail = val.invalidEmail;
		});

		modalPred.find('.wc22-modals__lbox__head > h4').text('');
  
		modalPredBody = '<div class="modals__lbx--wrap">';
		  modalPredBody += '<img class="mrgn-btm" src="../../images/prediction/icons/promotion-' + modalPredImg + '.svg" />';
		  modalPredBody += '<div class="modals__lbx--top--msg mrgn-btm">' + modalPredBigText + '</div>';
		  if(args == 'false'){
			modalPredBody += '<span class="modals__lbx--bottom--msg mrgn-btm">Your prediction has not been placed. Try to repeat the process.</span>';
		  }else{
			modalPredBody += '<span class="modals__lbx--bottom--msg">If you want a summary of your prediction, input your email.!</span>';
			modalPredBody += '<span class="modals__lbx--bottom--msg mrgn-btm">Thank you for joining this prediction promo!</span>';
			modalPredBody += '<div class="email-lbl"><input type="email" id="pred_email" name="pred_email" placeholder="Enter valid e-mail address"></div>';
			modalPredBody += '<span class="txt-err d-none">' + ginvalidEmail + '</span>';
		}
		modalPredBody += '</div>';

		modalPredFooter = "<button class='btn " + modalPredBtnClass + " btn--disabled'>" + modalPredBtnText + "</button>";
		modalPred.find('.wc22-modals__lbox__content').html(modalPredBody);
		modalPred.find('.wc22-modals__lbox__footer').html(modalPredFooter);

		$('.wc22-modals__lbox--pred.act .btn-send-email').on('click',  function(e){
			e.preventDefault();
			let emailInput = $('#pred_email').val();

			console.log(IsEmail(emailInput))
	
			//validation for email
			if(IsEmail(emailInput) === true){
				$('.email-lbl').removeClass('err');
				$('.txt-err').addClass('d-none');
				SendEmail(emailInput);
			}else{
				$('.email-lbl').addClass('err');
				$('.txt-err').removeClass('d-none');
			}
		});
	
	}


	$(document).on('keyup', '.wc22-modals__lbox--pred.act input#pred_email',function(){
		let emailInput = $(this).val();
		if(emailInput.length > 0){
			$('.btn-send-email').removeClass('btn--disabled').addClass('btn--confirm');
		}else{
			$('.btn-send-email').removeClass('btn--confirm').addClass('btn--disabled');
		}
	});

	function GetEmailTemplate() {
		var templateId = "";
    
		if (isPredictionProd) {
		  //PROD
		  if (htmlLang === "en-US") {
			templateId = "763817e5-8cfb-48c6-8370-4ff2e68fdec4";
		  } else if (htmlLang === "id-ID") {
			templateId = "29ede0c8-9e3a-4555-8f8c-1bfe8f192118";
		  } else if (htmlLang === "vi-VN") {
			templateId = "77879a12-4010-4e1e-b262-3c1e565f5fee";
		  } else if (htmlLang === "th-TH") {
			templateId = "123e0578-4fe7-4e88-a60f-d5c68fbef8ca";
		  } else if (htmlLang === "zh-CN") {
			templateId = "433ee0ad-5721-4db4-8603-70fd43e46725";
		  } else if (htmlLang === "ko-KR") {
			templateId = "049929ec-6485-472b-8f85-da82fc12a3e9";
		  } else if (htmlLang === "ja-JP") {
			templateId = "5c6f6a00-5b17-4719-b8a3-df4208d32c0f";
		  }
		}
		else {
		  //UAT
		  if (htmlLang === "en-US") {
			templateId = "763817e5-8cfb-48c6-8370-4ff2e68fdec4";
		  } else if (htmlLang === "id-ID") {
			templateId = "29ede0c8-9e3a-4555-8f8c-1bfe8f192118";
		  } else if (htmlLang === "vi-VN") {
			templateId = "77879a12-4010-4e1e-b262-3c1e565f5fee";
		  } else if (htmlLang === "th-TH") {
			templateId = "123e0578-4fe7-4e88-a60f-d5c68fbef8ca";
		  } else if (htmlLang === "zh-CN") {
			templateId = "433ee0ad-5721-4db4-8603-70fd43e46725";
		  } else if (htmlLang === "ko-KR") {
			templateId = "049929ec-6485-472b-8f85-da82fc12a3e9";
		  } else if (htmlLang === "ja-JP") {
			templateId = "5c6f6a00-5b17-4719-b8a3-df4208d32c0f";
		  }
		}
	
		return templateId;
	}

	function GetEmailDomain() {
		var emailDomain = "";
		if (isPredictionProd) {
			//PROD
			emailDomain = "promo@mail.m88.com";
		}
		else {
			//UAT
			emailDomain = "noreply@mail.m88.com";
		}
		return emailDomain
	}


	function SendEmail(emailInput) {

		var emailDomain = GetEmailDomain();
		var templateId = GetEmailTemplate();
		var email = emailInput;

		console.log('Prediction:' + predictionJson.r16_1.match_49 + "| username:" + username + "| email:" + emailInput);
	
		// var settings = {
		// 	"url": "https://airshipstg.36aid.com/API/Emailq",
		// 	"method": "POST",
		// 	"Content-Type": "application/json",
		// 	"data": {
		// 		"audience": {
		// 			"create_and_send": [{
		// 				"ua_address": email,
		// 				"user_name": email,
		// 				"match_49": predictionJson.r16_1.match_49,
		// 				"match_50": predictionJson.r16_1.match_50,
		// 				"match_51": predictionJson.r16_2.match_51,
		// 				"match_52": predictionJson.r16_2.match_52,
		// 				"match_53": predictionJson.r16_3.match_53,
		// 				"match_54": predictionJson.r16_3.match_54,
		// 				"match_55": predictionJson.r16_4.match_55,
		// 				"match_56": predictionJson.r16_4.match_56,
		// 				"match_57": predictionJson.qf1.match_57,
		// 				"match_58": predictionJson.qf1.match_58,
		// 				"match_59": predictionJson.qf2.match_59,
		// 				"match_60": predictionJson.qf2.match_60,
		// 				"match_61": predictionJson.sf.match_61,
		// 				"match_62": predictionJson.sf.match_62,
		// 				"match_64": predictionJson.f.match_49,
		// 			}]
		// 		},
		// 		"device_types": ["email"],
		// 		"notification": {
		// 			"email": {
		// 				"message_type": "transactional",
		// 				"sender_name": "M88 Promotions",
		// 				"sender_address": emailDomain,
		// 				"reply_to": emailDomain,
		// 				"template": {
		// 					"template_id": templateId
		// 				}
		// 			}
		// 		}
		// 	}
		// };
	
		// $.ajax(settings).done(function (response) {
		// 	var res = JSON.stringify(response);
		// 	var args = JSON.parse(res);
		// 	if(args.ok === true){
		// 		openEmailSuccess();
		// 	}else{
		// 		openCongratsPopup('false');
		// 	}
		// });
	}
	

    function openEmailSuccess(){
      $('.modals__lbx--bottom--msg:eq(0)').html('A summary of your prediction will be sent to your email.');
      $('.modals__lbx--bottom--msg:eq(1)').addClass('d-none').html('');
      $('.email-lbl').addClass('d-none').val('');
      $('.txt-err').text('');
      $('.wc22-modals__lbox__footer > .btn').removeClass('btn-send-email').text('OK');
    }

	function IsEmail(email){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return (!regex.test(email)) ? false : true;
	}

	function capitalizeFirstLetter(str) {

		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
	
		return capitalized;
	}

	function capitalizedUpperCase(str){
		const capUppercase = str.toUpperCase();
		return capUppercase;
	}
});