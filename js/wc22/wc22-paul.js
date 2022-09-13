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

var standingFormatted = {
  standingGroupA: [],  
  standingGroupB: [],
  standingGroupC: [],
  standingGroupD: [],
  standingGroupE: [],
  standingGroupF: [],
  standingGroupG: [],
  standingGroupH: [],
}
  
console.log(Object.entries(standingFormatted));


var templateHTML = `
<section class="wc22-tab-items__item--1__subs__item__sect">	
		<div class="inner">
			
			<div class="swiper-holder">
				<div class="swiper-groups">
					<div class="swiper-wrapper">

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group A</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>A1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/qa.svg?build=2.58.1.16080-"> ${standings[0].country}</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>A2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ec.svg?build=2.58.1.16080-"> ECU</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>A3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/sn.svg?build=2.58.1.16080-"> SEN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>A4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/nl.svg?build=2.58.1.16080-"> NED</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group B</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>B1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/en.svg?build=2.58.1.16080-"> ENG</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>B2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ir.svg?build=2.58.1.16080-"> IRN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>B3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/us.svg?build=2.58.1.16080-"> USA</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>B4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/wls.svg?build=2.58.1.16080-"> WAL</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group C</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>C1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ar.svg?build=2.58.1.16080-"> ARG</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>C2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/sa.svg?build=2.58.1.16080-"> KSA</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>C3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/mx.svg?build=2.58.1.16080-"> MEX</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>C4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/pl.svg?build=2.58.1.16080-"> POL</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group D</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>D1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/fr.svg?build=2.58.1.16080-"> FRA</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>D2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/at.svg?build=2.58.1.16080-"> AUS</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>D3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/dk.svg?build=2.58.1.16080-"> DEN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>D4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/tn.svg?build=2.58.1.16080-"> TUN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group E</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>E1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/es.svg?build=2.58.1.16080-"> ESP</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>E2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/cr.svg?build=2.58.1.16080-"> CRC</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>E3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/de.svg?build=2.58.1.16080-"> GER</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>E4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/jp.svg?build=2.58.1.16080-"> JPN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group F</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>F1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/be.svg?build=2.58.1.16080-"> BEL</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>F2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ca.svg?build=2.58.1.16080-"> CAN</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>F3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ma.svg?build=2.58.1.16080-"> MAR</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>F4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/hr.svg?build=2.58.1.16080-"> CRO</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group G</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>G1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/br.svg?build=2.58.1.16080-"> BRA</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>G2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/rs.svg?build=2.58.1.16080-"> SRB</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>G3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/ch.svg?build=2.58.1.16080-"> SUI</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>G4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/cm.svg?build=2.58.1.16080-"> CMR</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="groups-card">
								<table>
									<thead>
										<tr>
											<th colspan="2">Group H</th>
											<th>P</th>
											<th>W</th>
											<th>D</th>
											<th>L</th>
											<th>GD</th>
											<th>PTS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>H1</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/pt.svg?build=2.58.1.16080-"> POR</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>H2</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/gh.svg?build=2.58.1.16080-"> GHA</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>H3</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/uy.svg?build=2.58.1.16080-"> URU</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
										<tr>
											<td>H4</td>
											<td><img src="/~/static/sub-section/fifa-world-cup/assets/img/prediction/flags/team-flags/kor.svg?build=2.58.1.16080-"> KOR</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

					</div> 

					<div class="swiper-odds-prev"></div>
					<div class="swiper-odds-next"></div>
				</div>
			</div>

		</div>
</section>
`;

document.querySelector("body").insertAdjacentHTML('beforeend', templateHTML)

const teamData = function() {
  fetch(basedAPIURL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      data = res;
      dataManipulation(data);
      // console.log(res);
      // console.log(Object.keys(res.data));
      // console.log(Object.values(res.data)[0][1]);

      var standings = Object.values(res.data)[0];
      console.log(standings);

      standings.map((group) => {
        if (group.group_name == 'A') {
          standingFormatted.standingGroupA.push(group);
        } else if (group.group_name == 'B') {
          standingFormatted.standingGroupB.push(group);
        } else if (group.group_name == 'C') {
          standingFormatted.standingGroupC.push(group);
        } else if (group.group_name == 'D') {
          standingFormatted.standingGroupD.push(group);
        } else if (group.group_name == 'E') {
          standingFormatted.standingGroupE.push(group);
        } else if (group.group_name == 'F') {
          standingFormatted.standingGroupF.push(group);
        } else if (group.group_name == 'G') {
          standingFormatted.standingGroupG.push(group);
        } else if (group.group_name == 'H') {
          standingFormatted.standingGroupH.push(group);
        } 
      })
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