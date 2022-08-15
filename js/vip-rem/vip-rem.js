$(document).ready(function () {
  "use strict";

	// first load
	$(".vip-rem > div").removeClass("act");
	$(".vip-rem--md").addClass("act");

	setTimeout(function(){
		if($(".vip-rem--md").hasClass("act")){
			$(".vip-rem--md").removeClass("act");
			$(".vip-rem--sm").addClass("act");
		}
		if($(".vip-rem--lg").hasClass("act")){
			$(".vip-rem--sm").removeClass("act");
		}
	}, 20000);

	$(".rem-minimize").on("click", function(){
		$(".vip-rem--md").removeClass("act");
		$(".vip-rem--sm").addClass("act");
	});
	$(".rem-close").on("click", function(){
		$(".vip-rem--lg").removeClass("act");
		$(".vip-rem--sm").addClass("act");
	});
	$(".vip-rem--sm, .button--rem-channels").on("click", function(){
		$(".vip-rem--sm").removeClass("act");
		$(".vip-rem--md").removeClass("act");
		$(".vip-rem--lg").addClass("act");
	});
	$(".vip-rem--md .vip-rem__btn").on("click", function(){
		$(".vip-rem--sm, .vip-rem--md").removeClass("act");
		$(".vip-rem--lg").addClass("act");
	});
	$(".rem-bar").on("click", function(){
		$(".vip-rem--lg").removeClass("act");
		$(".vip-rem--sm").addClass("act");
	});

	function copyStringToClipboard (target) {
		/* Get the text field */
		var copyText = document.getElementById(target);

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */
	
		 /* Copy the text inside the text field */
		 // only works on HTTPS or localhost, not working on HTTP only
		navigator.clipboard.writeText(copyText.value);
	
		/* Success Copy */
		// console.log(copyText);
		$(".rem-copied").hide();
		$(copyText).parent().find(".rem-copied").show();
		setTimeout(function(){
			$(copyText).parent().find(".rem-copied").fadeOut();
		}, 10000)
 }

 $(".rem-icn--copy").on("click", function(){
	copyStringToClipboard(this.getAttribute('data-target'));
 });


//  //Make the DIV element draggagle:
// dragElement(document.getElementById("vip-rem--lg"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "rem-bar")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "rem-bar").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     //pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     // pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     // pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
});