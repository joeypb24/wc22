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
 * Fetch API from KO and Standings
 * const basedAPIURL = "https://msportsfeed.m88api.com/api/v1/feed/standsknockouts"; PROD
 * */
 const basedAPIURL = "https://api.mbosports.com/api/v1/feed/standsknockouts"; // STAGING
 let data;
 
 const teamData = function() {
   fetch(basedAPIURL)
     .then((res) => {
       return res.json();
     })
     .then((res) => {
       data = res;
    // console.log(res);
 
       var standings = Object.values(res.data)[0];

       // for loop by getting group of data
       for (var i = 1; i <= 1; i++) {
         var templateHTML = `
            <div class="swiper-slide">
                <div class="groups-card">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">Group ${standings[0].group_name}</th>
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
                                <td><span class="flag--${standings[0].country}"></span>${standings[0].country} </td>
                                <td>${standings[0].play}</td>
                                <td>${standings[0].win}</td>
                                <td>${standings[0].draw}</td>
                                <td>${standings[0].lose}</td>
                                <td>${standings[0].goal}</td>
                                <td>${standings[0].points}</td>
                            </tr>
                            <tr>
                                <td>A2</td>
                                <td><span class="flag--${standings[1].country}"></span>${standings[1].country} </td>
                                <td>${standings[1].play}</td>
                                <td>${standings[1].win}</td>
                                <td>${standings[1].draw}</td>
                                <td>${standings[1].lose}</td>
                                <td>${standings[1].goal}</td>
                                <td>${standings[1].points}</td>
                            </tr>
                            <tr>
                                <td>A3</td>
                                <td><span class="flag--${standings[2].country}"></span>${standings[2].country} </td>
                                <td>${standings[2].play}</td>
                                <td>${standings[2].win}</td>
                                <td>${standings[2].draw}</td>
                                <td>${standings[2].lose}</td>
                                <td>${standings[2].goal}</td>
                                <td>${standings[2].points}</td>
                            </tr>
                            <tr>
                                <td>A4</td>
                                <td><span class="flag--${standings[3].country}"></span>${standings[3].country} </td>
                                <td>${standings[3].play}</td>
                                <td>${standings[3].win}</td>
                                <td>${standings[3].draw}</td>
                                <td>${standings[3].lose}</td>
                                <td>${standings[3].goal}</td>
                                <td>${standings[3].points}</td>
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
                                <th colspan="2">Group ${standings[4].group_name}</th>
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
                                <td><span class="flag--${standings[4].country}"></span>${standings[4].country} </td>
                                <td>${standings[4].play}</td>
                                <td>${standings[4].win}</td>
                                <td>${standings[4].draw}</td>
                                <td>${standings[4].lose}</td>
                                <td>${standings[4].goal}</td>
                                <td>${standings[4].points}</td>
                            </tr>
                            <tr>
                                <td>B2</td>
                                <td><span class="flag--${standings[5].country}"></span>${standings[5].country} </td>
                                <td>${standings[5].play}</td>
                                <td>${standings[5].win}</td>
                                <td>${standings[5].draw}</td>
                                <td>${standings[5].lose}</td>
                                <td>${standings[5].goal}</td>
                                <td>${standings[5].points}</td>
                            </tr>
                            <tr>
                                <td>B3</td>
                                <td><span class="flag--${standings[6].country}"></span>${standings[6].country} </td>
                                <td>${standings[6].play}</td>
                                <td>${standings[6].win}</td>
                                <td>${standings[6].draw}</td>
                                <td>${standings[6].lose}</td>
                                <td>${standings[6].goal}</td>
                                <td>${standings[6].points}</td>
                            </tr>
                            <tr>
                                <td>B4</td>
                                <td><span class="flag--${standings[7].country}"></span>${standings[7].country} </td>
                                <td>${standings[7].play}</td>
                                <td>${standings[7].win}</td>
                                <td>${standings[7].draw}</td>
                                <td>${standings[7].lose}</td>
                                <td>${standings[7].goal}</td>
                                <td>${standings[7].points}</td>
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
                                <th colspan="2">Group ${standings[8].group_name}</th>
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
                                <td><span class="flag--${standings[8].country}"></span>${standings[8].country} </td>
                                <td>${standings[8].play}</td>
                                <td>${standings[8].win}</td>
                                <td>${standings[8].draw}</td>
                                <td>${standings[8].lose}</td>
                                <td>${standings[8].goal}</td>
                                <td>${standings[8].points}</td>
                            </tr>
                            <tr>
                                <td>C2</td>
                                <td><span class="flag--${standings[9].country}"></span>${standings[9].country} </td>
                                <td>${standings[9].play}</td>
                                <td>${standings[9].win}</td>
                                <td>${standings[9].draw}</td>
                                <td>${standings[9].lose}</td>
                                <td>${standings[9].goal}</td>
                                <td>${standings[9].points}</td>
                            </tr>
                            <tr>
                                <td>C3</td>
                                <td><span class="flag--${standings[10].country}"></span>${standings[10].country} </td>
                                <td>${standings[10].play}</td>
                                <td>${standings[10].win}</td>
                                <td>${standings[10].draw}</td>
                                <td>${standings[10].lose}</td>
                                <td>${standings[10].goal}</td>
                                <td>${standings[10].points}</td>
                            </tr>
                            <tr>
                                <td>C4</td>
                                <td><span class="flag--${standings[11].country}"></span>${standings[11].country} </td>
                                <td>${standings[11].play}</td>
                                <td>${standings[11].win}</td>
                                <td>${standings[11].draw}</td>
                                <td>${standings[11].lose}</td>
                                <td>${standings[11].goal}</td>
                                <td>${standings[11].points}</td>
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
                                <th colspan="2">Group ${standings[12].group_name}</th>
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
                                <td><span class="flag--${standings[12].country}"></span>${standings[12].country} </td>
                                <td>${standings[12].play}</td>
                                <td>${standings[12].win}</td>
                                <td>${standings[12].draw}</td>
                                <td>${standings[12].lose}</td>
                                <td>${standings[12].goal}</td>
                                <td>${standings[12].points}</td>
                            </tr>
                            <tr>
                                <td>D2</td>
                                <td><span class="flag--${standings[13].country}"></span>${standings[13].country} </td>
                                <td>${standings[13].play}</td>
                                <td>${standings[13].win}</td>
                                <td>${standings[13].draw}</td>
                                <td>${standings[13].lose}</td>
                                <td>${standings[13].goal}</td>
                                <td>${standings[13].points}</td>
                            </tr>
                            <tr>
                                <td>D3</td>
                                <td><span class="flag--${standings[14].country}"></span>${standings[14].country} </td>
                                <td>${standings[14].play}</td>
                                <td>${standings[14].win}</td>
                                <td>${standings[14].draw}</td>
                                <td>${standings[14].lose}</td>
                                <td>${standings[14].goal}</td>
                                <td>${standings[14].points}</td>
                            </tr>
                            <tr>
                                <td>D4</td>
                                <td><span class="flag--${standings[15].country}"></span>${standings[15].country} </td>
                                <td>${standings[15].play}</td>
                                <td>${standings[15].win}</td>
                                <td>${standings[15].draw}</td>
                                <td>${standings[15].lose}</td>
                                <td>${standings[15].goal}</td>
                                <td>${standings[15].points}</td>
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
                                <th colspan="2">Group ${standings[16].group_name}</th>
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
                                <td><span class="flag--${standings[16].country}"></span>${standings[16].country} </td>
                                <td>${standings[16].play}</td>
                                <td>${standings[16].win}</td>
                                <td>${standings[16].draw}</td>
                                <td>${standings[16].lose}</td>
                                <td>${standings[16].goal}</td>
                                <td>${standings[16].points}</td>
                            </tr>
                            <tr>
                                <td>E2</td>
                                <td><span class="flag--${standings[17].country}"></span>${standings[17].country} </td>
                                <td>${standings[17].play}</td>
                                <td>${standings[17].win}</td>
                                <td>${standings[17].draw}</td>
                                <td>${standings[17].lose}</td>
                                <td>${standings[17].goal}</td>
                                <td>${standings[17].points}</td>
                            </tr>
                            <tr>
                                <td>E3</td>
                                <td><span class="flag--${standings[18].country}"></span>${standings[18].country} </td>
                                <td>${standings[18].play}</td>
                                <td>${standings[18].win}</td>
                                <td>${standings[18].draw}</td>
                                <td>${standings[18].lose}</td>
                                <td>${standings[18].goal}</td>
                                <td>${standings[18].points}</td>
                            </tr>
                            <tr>
                                <td>E4</td>
                                <td><span class="flag--${standings[19].country}"></span>${standings[19].country} </td>
                                <td>${standings[19].play}</td>
                                <td>${standings[19].win}</td>
                                <td>${standings[19].draw}</td>
                                <td>${standings[19].lose}</td>
                                <td>${standings[19].goal}</td>
                                <td>${standings[19].points}</td>
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
                                <th colspan="2">Group ${standings[20].group_name}</th>
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
                                <td><span class="flag--${standings[20].country}"></span>${standings[20].country} </td>
                                <td>${standings[20].play}</td>
                                <td>${standings[20].win}</td>
                                <td>${standings[20].draw}</td>
                                <td>${standings[20].lose}</td>
                                <td>${standings[20].goal}</td>
                                <td>${standings[20].points}</td>
                            </tr>
                            <tr>
                                <td>F2</td>
                                <td><span class="flag--${standings[21].country}"></span>${standings[21].country} </td>
                                <td>${standings[21].play}</td>
                                <td>${standings[21].win}</td>
                                <td>${standings[21].draw}</td>
                                <td>${standings[21].lose}</td>
                                <td>${standings[21].goal}</td>
                                <td>${standings[21].points}</td>
                            </tr>
                            <tr>
                                <td>F3</td>
                                <td><span class="flag--${standings[22].country}"></span>${standings[22].country} </td>
                                <td>${standings[22].play}</td>
                                <td>${standings[22].win}</td>
                                <td>${standings[22].draw}</td>
                                <td>${standings[22].lose}</td>
                                <td>${standings[22].goal}</td>
                                <td>${standings[22].points}</td>
                            </tr>
                            <tr>
                                <td>F4</td>
                                <td><span class="flag--${standings[23].country}"></span>${standings[23].country} </td>
                                <td>${standings[23].play}</td>
                                <td>${standings[23].win}</td>
                                <td>${standings[23].draw}</td>
                                <td>${standings[23].lose}</td>
                                <td>${standings[23].goal}</td>
                                <td>${standings[23].points}</td>
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
                                <th colspan="2">Group ${standings[24].group_name}</th>
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
                                <td><span class="flag--${standings[24].country}"></span>${standings[24].country} </td>
                                <td>${standings[24].play}</td>
                                <td>${standings[24].win}</td>
                                <td>${standings[24].draw}</td>
                                <td>${standings[24].lose}</td>
                                <td>${standings[24].goal}</td>
                                <td>${standings[24].points}</td>
                            </tr>
                            <tr>
                                <td>G2</td>
                                <td><span class="flag--${standings[25].country}"></span>${standings[25].country} </td>
                                <td>${standings[25].play}</td>
                                <td>${standings[25].win}</td>
                                <td>${standings[25].draw}</td>
                                <td>${standings[25].lose}</td>
                                <td>${standings[25].goal}</td>
                                <td>${standings[25].points}</td>
                            </tr>
                            <tr>
                                <td>G3</td>
                                <td><span class="flag--${standings[26].country}"></span>${standings[26].country} </td>
                                <td>${standings[26].play}</td>
                                <td>${standings[26].win}</td>
                                <td>${standings[26].draw}</td>
                                <td>${standings[26].lose}</td>
                                <td>${standings[26].goal}</td>
                                <td>${standings[26].points}</td>
                            </tr>
                            <tr>
                                <td>G4</td>
                                <td><span class="flag--${standings[27].country}"></span>${standings[27].country} </td>
                                <td>${standings[27].play}</td>
                                <td>${standings[27].win}</td>
                                <td>${standings[27].draw}</td>
                                <td>${standings[27].lose}</td>
                                <td>${standings[27].goal}</td>
                                <td>${standings[27].points}</td>
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
                                <th colspan="2">Group ${standings[28].group_name}</th>
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
                                <td><span class="flag--${standings[28].country}"></span>${standings[28].country} </td>
                                <td>${standings[28].play}</td>
                                <td>${standings[28].win}</td>
                                <td>${standings[28].draw}</td>
                                <td>${standings[28].lose}</td>
                                <td>${standings[28].goal}</td>
                                <td>${standings[28].points}</td>
                            </tr>
                            <tr>
                                <td>H2</td>
                                <td><span class="flag--${standings[29].country}"></span>${standings[29].country} </td>
                                <td>${standings[29].play}</td>
                                <td>${standings[29].win}</td>
                                <td>${standings[29].draw}</td>
                                <td>${standings[29].lose}</td>
                                <td>${standings[29].goal}</td>
                                <td>${standings[29].points}</td>
                            </tr>
                            <tr>
                                <td>H3</td>
                                <td><span class="flag--${standings[30].country}"></span>${standings[30].country} </td>
                                <td>${standings[30].play}</td>
                                <td>${standings[30].win}</td>
                                <td>${standings[30].draw}</td>
                                <td>${standings[30].lose}</td>
                                <td>${standings[30].goal}</td>
                                <td>${standings[30].points}</td>
                            </tr>
                            <tr>
                                <td>H4</td>
                                <td><span class="flag--${standings[31].country}"></span>${standings[31].country} </td>
                                <td>${standings[31].play}</td>
                                <td>${standings[31].win}</td>
                                <td>${standings[31].draw}</td>
                                <td>${standings[31].lose}</td>
                                <td>${standings[31].goal}</td>
                                <td>${standings[31].points}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         `;
         document.querySelector(".template--scripts").insertAdjacentHTML('beforeend', templateHTML)
       }
     })
 }
 teamData(); // Script for Group Data

 /**
  * For YT Thumbnail
  */

  var lang = document.documentElement.lang; // for multilingual
  var key = 'AIzaSyAFUsyU2VIrok03yraRa6zHJFc8ISDjjkA';
  var playlistId;
  var requestURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  
  switch (lang) {
      case 'id-ID':
          playlistId = 'PL__3xoGVn1aYAuyGOnwuOIQHHR98QMLAB';
          break;
      case 'zh-CN':
          playlistId = 'PL__3xoGVn1aZJgPem0mHvV6lL2ynuXwnb';
          break;
      case 'th-TH':
          playlistId = 'PL__3xoGVn1aY_MWeMThc6hsl697k-X0kb';
          break;
      case 'vi-VN':
          playlistId = 'PL__3xoGVn1aZ3rckNJZqyuFgj5mnJlXGt';
          break;
      case 'kr-KR':
          playlistId = 'PL__3xoGVn1abnYSKxXTdQ7A9k4vbgNAlG';
          break;
      default:
          playlistId = 'PL__3xoGVn1absaHBVAPsaaT-oM0jKyNfT';
          break;
  }
  
  var options = {
      part: 'snippet',
      key: key,
      maxResults: 20,
      playlistId: playlistId
  }

  const fetchYT = () => {
      $.getJSON(requestURL, options, function(data){
          for(let i=0;i<data.items.length;i++) {
              var thumbSrc = data.items[i].snippet.thumbnails.medium.url;
              var title = data.items[i].snippet.title;
              var vidID = data.items[i].snippet.resourceId.videoId;
      
              if(i === 0) {
                  $('#ytiframe').attr('src', 'https://www.youtube.com/embed/'+vidID);
              }
      
              $('.video-list').append('<li'+((i === 0) ? ' class="active"' : '')+'>\
              <div class="card card-video" data-vidid="'+vidID+'"><img src="'+thumbSrc+'" /></div>\
              <div class="video-title">'+title+'</div>\
              </li>');
          }
      });
  }

  
  /**Fetch the YT data */
  fetchYT();