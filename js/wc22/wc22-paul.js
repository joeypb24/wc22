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
