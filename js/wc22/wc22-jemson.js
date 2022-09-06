jQuery(function($) {
	'use strict';
	var apiPredictionProd = 'https://docs.google.com/spreadsheets/d/1v4MKHKmKfrfiy1g8Znri9x1UZ85Jmw4JPcaUh0vns4o/edit#gid=0';
	var apiPredictionUAT = '';
	var isPredictionProd = true;

	var urlParamLang = state.user.locale;
	// var urlParamLang = "th-TH";

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

	jQuery.fn.extend({
		initDropdown: function () {
			$(this).each(function(){
				var that = this;
				var clickDetect = 0;
				$(that).find('.dropdown-selected, .dropdown-selection').mouseenter(function(){
					clickDetect = 1;
				});
				$(that).find('.dropdown-selected, .dropdown-selection').mouseleave(function(){
					clickDetect = 0;
				});
				$(that).find('.dropdown-selected').click(function(){
					if(!$(this).hasClass('active')) {
						$(this).addClass('active');
					}
					else {
						$(this).removeClass('active');
					}
				});
				$(document).click(function(){
					if(clickDetect == 0) {
						$(that).find('.dropdown-selected').removeClass('active');
					}
				});
				$(that).find('.dropdown-selection dd').click(function(){
					var hiddenVal = ($(this).attr('data-value') != 'placeholder') ? $(this).attr('data-value') : '';
					$(that).find('.dropdown-selected').text($(this).text()).attr('data-country', $(this).attr('data-country'));
					$(that).find('input[type="hidden"]').val(hiddenVal);
					$(that).removeClass('valid');
					if($(that).find('input[type="hidden"]').val() != '') {
						$(that).addClass('valid');
					}
					$(that).find('.dropdown-selected').removeClass('active');
				});
				
				var dropdownHiddenField = $(that).find('input[type="hidden"]').attr('name');
				$(that).find('.dropdown-selected').text($(that).find('dd:eq(0)').text()).attr('data-country', $(that).find('dd:eq(0)').attr('data-country'));
				if($(that).find('dd:eq(0)').attr('data-value') == 'placeholder') {
					$(that).find('input[type="hidden"]').val('');
				}
				else {
					$(that).find('input[type="hidden"]').val($(that).find('dd:eq(0)').attr('data-value'));
				}
			});
		}
	});
	$('.dropdown-box').initDropdown();

	
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
		
		let counter = 0;
		$('.dd-wrap').each(function(){
			counter += $(this).find('.dd-selected[data-val]').length;
		});
		console.log(counter)
		if(counter >= 15) {
			$('.cta-area .btn').removeClass('inactive');
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

	$(document).on('click', '.btn-submit-prediction', function(){
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

		$('.btn-submit-prediction').addClass('inactive');
		console.log(predictionJson)
		SavePrediction();
	});

	function SavePrediction(){
		var errMessage = "There was an error during saving prediction details. Please try again.";
		var data = [];
		data = {
			'Timestamp': '021351',
			'username': 'test',
			'Round16_1': predictionJson.r16_1.match_49,
			'Round16_2': predictionJson.r16_1.match_50,
			'Round16_3': predictionJson.r16_2.match_53,
			'Round16_4': predictionJson.r16_2.match_54,
			'Round16_5': predictionJson.r16_3.match_51,
			'Round16_6': predictionJson.r16_3.match_52,
			'Round16_7': predictionJson.r16_4.match_55,
			'Round16_8': predictionJson.r16_4.match_56,
			'QuarterFinals_1': predictionJson.qf1.match_57,
			'QuarterFinals_2': predictionJson.qf1.match_58,
			'QuarterFinals_3': predictionJson.qf2.match_59,
			'QuarterFinals_4': predictionJson.qf2.match_60,
			'SemiFinals_1': predictionJson.sf.match_61,
			'SemiFinals_2': predictionJson.sf.match_62,
			'Finals': predictionJson.f.match_64
		};

		var uri = ApiPrediction();

		$.ajax({
			url: uri,
			type: "post",
			data: data,
			success: function () {
				//SendEmail();
				console.log('success')
			},
			error: function () {
				console.log(errMessage);
			}
		});
	}

	function ApiPrediction(){
		if(isPredictionProd){
			return apiPredictionProd; //PROD
		}else{
			return apiPredictionUAT;
		}
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