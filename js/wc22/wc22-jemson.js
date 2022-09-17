jQuery(function($) {
	'use strict';

    const langcontent2 = {
		"en-US": {
		  btn1: "SUBMIT PREDICTIONS",
		  placeholder1: "How do we address you?",
		  placeholder2: "select team",
		  placeholder3: "Select team",
		  txt20: "ROUND OF 16",
		  txt21: "Quarter Finals",
		  txt22: "Semi Finals",
		  txt23: "Finals",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"en-IN": {
		  btn1: "SUBMIT PREDICTIONS",
		  placeholder1: "How do we address you?",
		  placeholder2: "select team",
		  placeholder3: "Select team",
		  txt20: "ROUND OF 16",
		  txt21: "Quarter Finals",
		  txt22: "Semi Finals",
		  txt23: "Finals",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"id-ID": {
		  btn1: "KIRIM PREDIKSI",
		  placeholder1: "How do we address you?",
		  placeholder2: "pilih tim",
		  placeholder3: "pilih tim",
		  txt20: "BABAK 16",
		  txt21: "PEREMPAT FINAL",
		  txt22: "SEMI-FINAL",
		  txt23: "FINAL",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"ja-JP": {
		  btn1: "SUBMIT PREDICTIONS",
		  placeholder1: "How do we address you?",
		  placeholder2: "select team",
		  placeholder3: "Select team",
		  txt20: "ROUND OF 16",
		  txt21: "Quarter Finals",
		  txt22: "Semi Finals",
		  txt23: "Finals",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"zh-CN": {
		  btn1: "提交预测",
		  placeholder1: "How do we address you?",
		  placeholder2: "选择团队",
		  placeholder3: "选择团队",
		  txt20: "十六强",
		  txt21: "四分之一决赛",
		  txt22: "半决赛",
		  txt23: "决赛",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"vi-VN": {
		  btn1: "GỬI DỰ ĐOÁN",
		  placeholder1: "How do we address you?",
		  placeholder2: "chọn đội",
		  placeholder3: "chọn đội",
		  txt20: "VÒNG 16",
		  txt21: "THỨ KẾT",
		  txt22: "BÁN KẾT",
		  txt23: "CHUNG KẾT",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"th-TH": {
		  btn1: "ยืนยันการทายผลบอล",
		  placeholder1: "How do we address you?",
		  placeholder2: "เลือกทีม",
		  placeholder3: "เลือกทีม",
		  txt20: "รอบ 16 ทีม",
		  txt21: "รอบก่อนรองชนะเลิศ",
		  txt22: "รอบรองชนะเลิศ",
		  txt23: "รอบชิงชนะเลิศ",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
		"ko-KR": {
		  btn1: "예측하기",
		  placeholder1: "How do we address you?",
		  placeholder2: "팀 선택",
		  placeholder3: "팀 선택",
		  txt20: "16강",
		  txt21: "8강",
		  txt22: "4강",
		  txt23: "결승전",
		  txt24: "CHAMPION",
		  txt25: "Thank you for joining",
		  cta: "",
		},
    };
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
		"ja-JP": [
		  { id: "ar", name: "アルゼンチン", short: "アルゼンチン", group: "c" },
		  { id: "at", name: "オーストラリア", short: "オーストラリア", group: "d" },
		  { id: "be", name: "ベルギー", short: "ベルギー", group: "f" },
		  { id: "br", name: "ブラジル", short: "ブラジル", group: "g" },
		  { id: "ca", name: "カナダ", short: "カナダ", group: "f" },
		  { id: "cm", name: "カメルーン", short: "カメルーン", group: "g" },
		  { id: "cr", name: "コスタリカ", short: "コスタリカ", group: "e" },
		  { id: "hr", name: "クロアチア", short: "クロアチア", group: "f" },
		  { id: "dk", name: "デンマーク", short: "デンマーク", group: "d" },
		  { id: "en", name: "イングランド", short: "イングランド", group: "b" },
		  { id: "ec", name: "エクアドル", short: "エクアドル", group: "a" },
		  { id: "fr", name: "フランス", short: "フランス", group: "d" },
		  { id: "de", name: "ドイツ", short: "ドイツ", group: "e" },
		  { id: "gh", name: "ガーナ", short: "ガーナ", group: "h" },
		  { id: "ir", name: "イラン", short: "イラン", group: "b" },
		  { id: "jp", name: "日本", short: "日本", group: "e" },
		  { id: "mx", name: "メキシコ", short: "メキシコ", group: "c" },
		  { id: "ma", name: "モロッコ", short: "モロッコ", group: "f" },
		  { id: "nl", name: "オランダ", short: "オランダ", group: "a" },
		  { id: "pl", name: "ポーランド", short: "ポーランド", group: "c" },
		  { id: "pt", name: "ポルトガル", short: "ポルトガル", group: "h" },
		  { id: "qa", name: "カタール", short: "カタール", group: "a" },
		  { id: "sa", name: "サウジアラビア", short: "サウジアラビア", group: "c" },
		  { id: "sn", name: "セネガル", short: "セネガル", group: "a" },
		  { id: "rs", name: "セルビア", short: "srb", group: "g" },
		  { id: "kor", name: "韓国", short: "韓国", group: "h" },
		  { id: "es", name: "スペイン", short: "スペイン", group: "e" },
		  { id: "ch", name: "スイス", short: "スイス", group: "g" },
		  { id: "tn", name: "チュニジア", short: "チュニジア", group: "d" },
		  { id: "us", name: "アメリカ合衆国", short: "アメリカ合衆国", group: "b" },
		  { id: "uy", name: "ウルグアイ", short: "ウルグアイ", group: "h" },
		  { id: "ws", name: "ウェールズ", short: "ウェールズ", group: "b" },
		],
		"zh-CN": [
		  { id: "ar", name: "阿根廷", short: "阿根廷", group: "c" },
		  { id: "at", name: "澳大利亚", short: "澳大利亚", group: "d" },
		  { id: "be", name: "比利时", short: "比利时", group: "f" },
		  { id: "br", name: "巴西", short: "巴西", group: "g" },
		  { id: "ca", name: "加拿大", short: "加拿大", group: "f" },
		  { id: "cm", name: "喀麦隆", short: "喀麦隆", group: "g" },
		  { id: "cr", name: "哥斯达黎加", short: "哥斯达黎加", group: "e" },
		  { id: "hr", name: "克罗地亚", short: "克罗地亚", group: "f" },
		  { id: "dk", name: "丹麦", short: "丹麦", group: "d" },
		  { id: "en", name: "英格兰", short: "英格兰", group: "b" },
		  { id: "ec", name: "厄瓜多尔", short: "厄瓜多尔", group: "a" },
		  { id: "fr", name: "法国", short: "法国", group: "d" },
		  { id: "de", name: "德国", short: "德国", group: "e" },
		  { id: "gh", name: "加纳", short: "加纳", group: "h" },
		  { id: "ir", name: "伊朗", short: "伊朗", group: "b" },
		  { id: "jp", name: "日本", short: "日本", group: "e" },
		  { id: "mx", name: "墨西哥", short: "墨西哥", group: "c" },
		  { id: "ma", name: "摩洛哥", short: "摩洛哥", group: "f" },
		  { id: "nl", name: "荷兰", short: "荷兰", group: "a" },
		  { id: "pl", name: "波兰", short: "波兰", group: "c" },
		  { id: "pt", name: "葡萄牙", short: "葡萄牙", group: "h" },
		  { id: "qa", name: "卡塔尔", short: "卡塔尔", group: "a" },
		  { id: "sa", name: "沙特阿拉伯", short: "沙特阿拉伯", group: "c" },
		  { id: "sn", name: "塞内加尔", short: "塞内加尔", group: "a" },
		  { id: "rs", name: "塞尔维亚", short: "塞尔维亚", group: "g" },
		  { id: "kor", name: "韩国", short: "韩国", group: "h" },
		  { id: "es", name: "西班牙", short: "西班牙", group: "e" },
		  { id: "ch", name: "瑞士", short: "瑞士", group: "g" },
		  { id: "tn", name: "突尼斯", short: "突尼斯", group: "d" },
		  { id: "us", name: "美国", short: "美国", group: "b" },
		  { id: "uy", name: "乌拉圭", short: "乌拉圭", group: "h" },
		  { id: "ws", name: "威尔士", short: "威尔士", group: "b" },
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
		  { id: "pl", name: "폴란드", short: "pol", group: "c" },
		  { id: "pt", name: "포르투갈", short: "por", group: "h" },
		  { id: "qa", name: "카타르", short: "qat", group: "a" },
		  { id: "sa", name: "사우디 아라비아", short: "ksa", group: "c" },
		  { id: "sn", name: "세네갈", short: "sen", group: "a" },
		  { id: "rs", name: "세르비아", short: "srb", group: "g" },
		  { id: "kor", name: "대한민국", short: "kor", group: "h" },
		  { id: "es", name: "스페인", short: "esp", group: "e" },
		  { id: "ch", name: "스위스", short: "sui", group: "g" },
		  { id: "tn", name: "튀니지", short: "tun", group: "d" },
		  { id: "us", name: "미국", short: "usa", group: "b" },
		  { id: "uy", name: "우루과이", short: "uru", group: "h" },
		  { id: "ws", name: "웨일즈", short: "wal", group: "b" },
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
	var apiPredictionUAT = 'https://script.google.com/macros/s/AKfycbwiyY4hzdXB9c9Xaxogow1t7pnRcx1g9aC4cTSiKWa7Xz-kUGozpuzpsnZwm77oSb64WQ/exec';
	var isPredictionProd = false;

    var urlParamLang = state.user.locale;
    var preAuth = state.user.authenticated;
    var date = new Date();
	var grequiredEmail, ginvalidEmail;

	//date
	let oddsDate = function formatDate(d) {
		d = new Date('11/21/2022 13:00');
		let newDate;
		if (urlParamLang === "en-US") {
		  newDate = d.toLocaleString("en-US", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "zh-CN") {
		  newDate = d.toLocaleString("zh-CN", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "ja-JP") {
		  newDate = d.toLocaleString("ja-JP", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "ko-KR") {
		  newDate = d.toLocaleString("ko-KR", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "id-ID") {
		  newDate = d.toLocaleString("id-ID", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "th-TH") {
		  newDate = d.toLocaleString("th-TH", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else if (urlParamLang === "vi-VN") {
		  newDate = d.toLocaleString("vi-VN", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		} else {
		  newDate = d.toLocaleString("en-US", {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		  });
		}
		return newDate;
	};
	console.log(oddsDate());

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
					var shortVal = (urlParamLang !== 'en-US') ? value1.name : value1.short;
					(teamGroupArr[value1.group]).push('<div class="dd-option icon icon-'+value1.id+'" data-val="'+value1.id+'" data-acr="'+value1.short+'"><span class="txt">'+shortVal+'</span></div>');
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

	//set the input autocomplete to off
	setTimeout(function(){
		$('input').attr('autocomplete', 'off'); 
	}, 300);

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
		let ddArc = $(this).data('acr');
		let ddTxt = $(this).find('.txt').text();
		
		$(this).closest('.dd-wrap').find(".dd-selected[class*='icon']").removeClass (function (index, css) {
		   return (css.match (/(^|\s)icon\S+/g) || []).join(' ');
		});
		$(this).closest('.dd-wrap').find('.dd-selected').removeClass('placeholder').addClass('icon icon-'+ddVal);
		$(this).closest('.dd-wrap').find('.dd-selected').attr('data-val', ddVal);
		$(this).closest('.dd-wrap').find('.dd-selected .txt').text(ddTxt);
		$(this).closest('.dd-wrap').find('.dd-selected .txt').attr('data-acro', ddArc);
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

		/**Sending data to Gsheets Start */
		let match_49 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_50 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_53 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_54 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_51 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_52 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_55 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_56 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_57 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_58 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_59 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_60 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_61 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_62 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_64 = capitalizedUpperCase($('.bracket.champion .dd-wrap .dd-selected .txt').attr('data-acro'));

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
		/**Sending data to Gsheets End */

		SaveMatchSession();

		SavePrediction('1');

		$('.btn-submit-prediction').addClass('inactive');
	});

	function SaveMatchSession(){
		/**Set Session START */
		//Save text
		let match_session_49 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_50 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_53 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_54 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_51 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_52 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_55 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_56 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_57 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_58 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_59 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_60 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_61 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(0) .dd-selected .txt').text());
		let match_session_62 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(1) .dd-selected .txt').text());
		let match_session_64 = capitalizedUpperCase($('.bracket.champion .dd-wrap .dd-selected .txt').text());

		let storeSessionArgs = [{
			'match_49': match_session_49,
			'match_50': match_session_50,
			'match_51': match_session_51,
			'match_52': match_session_52,
			'match_53': match_session_53,
			'match_54': match_session_54,
			'match_55': match_session_55,
			'match_56': match_session_56,
			'match_57': match_session_57,
			'match_58': match_session_58,
			'match_59': match_session_59,
			'match_60': match_session_60,
			'match_61': match_session_61,
			'match_62': match_session_62,
			'match_64': match_session_64
		}];

		let match_acronym_49 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_50 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_53 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_54 = capitalizedUpperCase($('.bracket.quarter-finals:eq(0) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_51 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_52 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_55 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_56 = capitalizedUpperCase($('.bracket.quarter-finals:eq(1) .match-bracket:eq(1) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_57 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_58 = capitalizedUpperCase($('.bracket.semi-finals:eq(0) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_59 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_60 = capitalizedUpperCase($('.bracket.semi-finals:eq(1) .match-bracket:eq(0) .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_61 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(0) .dd-selected .txt').attr('data-acro'));
		let match_acronym_62 = capitalizedUpperCase($('.bracket.finals .match-bracket .dd-wrap:eq(1) .dd-selected .txt').attr('data-acro'));
		let match_acronym_64 = capitalizedUpperCase($('.bracket.champion .dd-wrap .dd-selected .txt').attr('data-acro'));

		let storeSessionAcroArgs = [{
			'match_49': match_acronym_49,
			'match_50': match_acronym_50,
			'match_51': match_acronym_51,
			'match_52': match_acronym_52,
			'match_53': match_acronym_53,
			'match_54': match_acronym_54,
			'match_55': match_acronym_55,
			'match_56': match_acronym_56,
			'match_57': match_acronym_57,
			'match_58': match_acronym_58,
			'match_59': match_acronym_59,
			'match_60': match_acronym_60,
			'match_61': match_acronym_61,
			'match_62': match_acronym_62,
			'match_64': match_acronym_64
		}];

		window.sessionStorage.setItem('match_txt',JSON.stringify(storeSessionArgs)); // For Text
		window.sessionStorage.setItem('match_acronym',JSON.stringify(storeSessionAcroArgs)); // For Acronymns
		/**Set Session END */
	}

	function SavePrediction(stats){
		/**
		 * @Status
		 * - 1. Sending for the Gsheets
		 * - 2. After Sending the airship to be called.
		 */
		var errMessage = "There was an error during saving prediction details. Please try again.";
		var storedMatchAcro = JSON.parse(sessionStorage.getItem("match_acronym"));
		var match_49 = '';
		var match_50 = '';
		var match_51 = '';
		var match_52 = '';
		var match_53 = '';
		var match_54 = '';
		var match_55 = '';
		var match_56 = '';
		var match_57 = '';
		var match_58 = '';
		var match_59 = '';
		var match_60 = '';
		var match_61 = '';
		var match_62 = '';
		var match_64 = '';

		var data = 'Timestamp=' + date;
		  data += '&username=' + username;
		if(stats !== '1'){
			var storedEmail = (sessionStorage.hasOwnProperty('match_email')) ? sessionStorage.getItem('match_email'): '';
			Object.entries(storedMatchAcro).map(obj => {
				const val = obj[1];
				match_49 = val.match_49;
				match_50 = val.match_50;
				match_51 = val.match_51;
				match_52 = val.match_52;
				match_53 = val.match_53;
				match_54 = val.match_54;
				match_55 = val.match_55;
				match_56 = val.match_56;
				match_57 = val.match_57;
				match_58 = val.match_58;
				match_59 = val.match_59;
				match_60 = val.match_60;
				match_61 = val.match_61;
				match_62 = val.match_62;
				match_64 = val.match_64;
			});
			data += '&email=' + storedEmail;
			data += '&Match_49=' + match_49;
			data += '&Match_50=' + match_50;
			data += '&Match_53=' + match_53;
			data += '&Match_54=' + match_54;
			data += '&Match_51=' + match_51;
			data += '&Match_52=' + match_52;
			data += '&Match_55=' + match_55;
			data += '&Match_56=' + match_56;
			data += '&Match_57=' + match_57;
			data += '&Match_58=' + match_58;
			data += '&Match_59=' + match_59;
			data += '&Match_60=' + match_60;
			data += '&Match_61=' + match_61;
			data += '&Match_62=' + match_62;
			data += '&Final=' + match_64;
		}else{
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
		}

		var uri = ApiPrediction();
		var beforeSend = (stats !== '1') ? '' : ajaxBeforeSend('1');

		$.ajax({
			url: uri,
			// headers: {'Content-type': 'application/json'},
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
			type: "post",
			data: data,
			// contentType: 'application/json; charset=utf-8',
			contentType: 'multipart/form-data',
			beforeSend: beforeSend,
			// complete: ajaxCompleteSend(),
			// contentType: "application/javascript",
        	// dataType: "jsonp",
			success: function (res) {
				if(stats === '1'){
					var result = (res.result === "success") ? 'true' : 'false';
					ajaxCompleteSend('1');
					openCongratsPopup(result);
					return false
				}
				console.log(res);
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

			if(key === urlParamLang)
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

		$('.btn-send-email').on('click',  function(e){
			e.preventDefault();
			e.stopPropagation();
			let emailInput = $('#pred_email').val();
	
			//validation for email
			if(IsEmail(emailInput) === true){
				$('.email-lbl').removeClass('err');
				$('.txt-err').addClass('d-none');

				/**Store Email to Session */
				window.sessionStorage.setItem('match_email', emailInput);

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
		  if (urlParamLang === "en-US") {
			templateId = "763817e5-8cfb-48c6-8370-4ff2e68fdec4";
		  } else if (urlParamLang === "id-ID") {
			templateId = "29ede0c8-9e3a-4555-8f8c-1bfe8f192118";
		  } else if (urlParamLang === "vi-VN") {
			templateId = "77879a12-4010-4e1e-b262-3c1e565f5fee";
		  } else if (urlParamLang === "th-TH") {
			templateId = "123e0578-4fe7-4e88-a60f-d5c68fbef8ca";
		  } else if (urlParamLang === "zh-CN") {
			templateId = "433ee0ad-5721-4db4-8603-70fd43e46725";
		  } else if (urlParamLang === "ko-KR") {
			templateId = "049929ec-6485-472b-8f85-da82fc12a3e9";
		  } else if (urlParamLang === "ja-JP") {
			templateId = "5c6f6a00-5b17-4719-b8a3-df4208d32c0f";
		  }
		}
		else {
		  //UAT
		  if (urlParamLang === "en-US") {
			templateId = "763817e5-8cfb-48c6-8370-4ff2e68fdec4";
		  } else if (urlParamLang === "id-ID") {
			templateId = "29ede0c8-9e3a-4555-8f8c-1bfe8f192118";
		  } else if (urlParamLang === "vi-VN") {
			templateId = "77879a12-4010-4e1e-b262-3c1e565f5fee";
		  } else if (urlParamLang === "th-TH") {
			templateId = "123e0578-4fe7-4e88-a60f-d5c68fbef8ca";
		  } else if (urlParamLang === "zh-CN") {
			templateId = "433ee0ad-5721-4db4-8603-70fd43e46725";
		  } else if (urlParamLang === "ko-KR") {
			templateId = "049929ec-6485-472b-8f85-da82fc12a3e9";
		  } else if (urlParamLang === "ja-JP") {
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
		return emailDomain;
	}

	function GetAirshipURI(){
		var airshipURL = '';
		return airshipURL = (isPredictionProd === true) ? "https://airship.36aid.com/API/Email" : "https://airshipstg.36aid.com/API/Email";
	}

	function SendEmail(emailInput) {
		var emailDomain = GetEmailDomain();
		var templateId = GetEmailTemplate();
		var asURL = GetAirshipURI();
		var email = emailInput;
		var storedMatch = JSON.parse(sessionStorage.getItem("match_txt"));
		var match_49 = '';
		var match_50 = '';
		var match_51 = '';
		var match_52 = '';
		var match_53 = '';
		var match_54 = '';
		var match_55 = '';
		var match_56 = '';
		var match_57 = '';
		var match_58 = '';
		var match_59 = '';
		var match_60 = '';
		var match_61 = '';
		var match_62 = '';
		var match_64 = '';

		Object.entries(storedMatch).map(obj => {
			const val = obj[1];
			match_49 = val.match_49;
			match_50 = val.match_50;
			match_51 = val.match_51;
			match_52 = val.match_52;
			match_53 = val.match_53;
			match_54 = val.match_54;
			match_55 = val.match_55;
			match_56 = val.match_56;
			match_57 = val.match_57;
			match_58 = val.match_58;
			match_59 = val.match_59;
			match_60 = val.match_60;
			match_61 = val.match_61;
			match_62 = val.match_62;
			match_64 = val.match_64;
		});
	
		var settings = {
			"url": asURL,
			"method": "POST",
			"Content-Type": "application/json",
			"data": {
				"audience": {
					"create_and_send": [{
						"ua_address": email,
						"user_name": email,
						"match_49": match_49,
						"match_50": match_50,
						"match_51": match_51,
						"match_52": match_52,
						"match_53": match_53,
						"match_54": match_54,
						"match_55": match_55,
						"match_56": match_56,
						"match_57": match_57,
						"match_58": match_58,
						"match_59": match_59,
						"match_60": match_60,
						"match_61": match_61,
						"match_62": match_62,
						"match_64": match_64,
					}]
				},
				"device_types": ["email"],
				"notification": {
					"email": {
						"message_type": "transactional",
						"sender_name": "M88 Promotions",
						"sender_address": emailDomain,
						"reply_to": emailDomain,
						"template": {
							"template_id": templateId
						}
					}
				}
			},
			"beforeSend": ajaxBeforeSend('2'),
		};

		console.log(settings);
	
		$.ajax(settings).done(function (response) {
			var res = JSON.stringify(response);
			var args = JSON.parse(res);

			SavePrediction('2');
			ajaxCompleteSend('2');

			if(args.ok === true){
				openEmailSuccess();
			}else{
				openCongratsPopup('false');
			}
		});
	}

	/**Close Modal Start*/
	$('.btn--close').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(".wc22-modals").removeClass("act");
		$('.wc22-modals__lbox--pred').removeClass("act");
		$("body").css("overflow", "auto");
	});
	/**Close Modal End*/

    function openEmailSuccess(){
      $('.modals__lbx--bottom--msg:eq(0)').html('A summary of your prediction will be sent to your email.');
      $('.modals__lbx--bottom--msg:eq(1)').addClass('d-none').html('');
      $('.email-lbl').addClass('d-none').val('');
      $('.txt-err').text('');
	  $('.wc22-modals__lbox__footer').addClass('d-none');
    }

	/**Ajax Call beforeSend */
	function ajaxBeforeSend(stats){
		/**
		 * @descrition append the loading element.
		 * @status 1. to send Gsheet, 2. send to Airship
		 */
		if(stats === "2"){
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__head').addClass('d-none');
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__content').addClass('d-none');
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__footer').addClass('d-none');
		}
		$("body").css("overflow", "hidden");
		$('.wc22-modals').addClass('act').append('<div class="loading-icon"></div>');
	}

	/**Ajax Call complete/success sending the data. */
	function ajaxCompleteSend(stats){ 
		/**
		 * @descrition remove the loading class 
		 * @status 1. to send Gsheet, 2. send to Airship
		 */
		if(stats === "2"){
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__head').removeClass('d-none');
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__content').removeClass('d-none');
			$('.wc22-modals__lbox--pred .wc22-modals__lbox__footer').removeClass('d-none');
		}

		$('.loading-icon').remove(); 
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