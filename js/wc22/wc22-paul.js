'use strict';

// Set the date we're counting down to
var countDownDate = new Date("Nov 20, 2022 16:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);





/**
 * Fetch API from knockouts
 */

const basedAPIURL = "https://msportsfeed.m88api.com/api/v1/feed/standsknockouts";
let data;

const teamData = function() {
  fetch(basedAPIURL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      data = res;
      dataManipulation(data);
      console.log(res);
      console.log(Object.keys(res.data));
      console.log(Object.values(res.data)[0][1]);
      var standings = Object.values(res.data)[0];
      for (var i = 0; i < standings.length; i++) {
        console.log(standings[i].group_name);
        console.log(standings[i].no_team);
      }
    })
}

// dataManipulation container
const dataManipulation = function(args) {
  Object.entries(args).map(obj => {
    const key = obj[0]; // status
    const val = obj[1]; // data -> knockouts and standings

    // conditional for entries
    if (val.knockouts && val.standings) {
      Object.entries(val.knockouts).map(objKO => {
        const valKO = objKO[1];
        console.log(valKO);
      }),
      Object.entries(val.standings).map(objStand => {
        const valStand = objStand[1];

        // Get data parameters
        const country = valStand['country'];
        const play = valStand['play'];
        const points = valStand['points'];
        const win = valStand['win'];
        const draw = valStand['draw'];
        const goal = valStand['goal'];
        const lose = valStand['lose'];
        // to deploy data
        const group_name = valStand['group_name'];
        const conceded = valStand['conceded'];

      

        // insert data to html
        // var standingData = `
        //   <tr>
        //     <td>A1</td>
        //     <td class="country"><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/qa.svg">${country} </td>
        //     <td> ${play}</td>
        //     <td>${win}</td>
        //     <td>${draw}</td>
        //     <td>${lose}</td>
        //     <td> ${goal}</td>
        //     <td>${points}</td>
        //   </tr>
        // `;

        // document.querySelector(".table--body").insertAdjacentHTML('beforeend', standingData)

      })
    }
  })
}

teamData();