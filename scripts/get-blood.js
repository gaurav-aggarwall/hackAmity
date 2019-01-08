mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGluZ2d1eSIsImEiOiJjanFvNTFsd2kwOTN3NDJwcHg1dGhuMDIxIn0.N3GDeGA8KOSp0ZbZ9262hA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [77.200, 28.7041],
  zoom: 11.25
});

map.on('load', function () {
  map.addLayer({
    "id": "places",
    "type": "symbol",
    "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "description": "<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1384, 28.6990]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href=\"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1320, 28.6790]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href=\"http://tallulaeatbar.ticketleap.com/2012beachblanket/\" target=\"_blank\" title=\"Opens in a new window\">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1400, 28.6890]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Ballston Arts & Crafts Market</strong><p>The <a href=\"http://ballstonarts-craftsmarket.blogspot.com/\" target=\"_blank\" title=\"Opens in a new window\">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1300, 28.6910]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's <a href=\"http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/\" target=\"_blank\" title=\"Opens in a new window\">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1384, 28.6910]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1384, 28.6790] //
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href=\"http://www.muhsinah.com\" target=\"_blank\" title=\"Opens in a new window\">Muhsinah</a> plays the <a href=\"http://www.blackcatdc.com\">Black Cat</a> (1811 14th Street NW) tonight with <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Exit Clov</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1484, 28.6990] //
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>A Little Night Music</strong><p>The Arlington Players' production of Stephen Sondheim's  <a href=\"http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show\" target=\"_blank\" title=\"Opens in a new window\"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1399, 28.6921]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Truckeroo</strong><p><a href=\"http://www.truckeroodc.com/www/\" target=\"_blank\">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [78.9324, 28.1910]
                }
            }]
        }
    },
    "layout": {
        "icon-image": "{icon}-15",
        "icon-allow-overlap": true
    }
  });
});

const cordi = [[77.1384, 28.6990],
               [77.1320, 28.6790],
               [77.1400, 28.6890],
               [77.1300, 28.6910],
               [77.1384, 28.6910],
               [77.1384, 28.6790],
               [77.1484, 28.6990],
               [77.1399, 28.6921],
               [77.9324, 28.5910]
              ]; 
            
var para = document.getElementById("demo");

let currentLoc = [];
const distArray = [];
var lowest=0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    para.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    currentLoc.push(position.coords.latitude)
    currentLoc.push(position.coords.longitude);
    KNN(currentLoc);
}


const KNN = (obj) => {
  for(let i=0; i<cordi.length ; i++){
    distArray.push(distance(obj,cordi[i]));
  }
  indexOfSmallest(distArray);
}

const distance = (obj,cord) => {
  let distance ;
  let delX = obj[0] - cord [0];
  let delY = obj[1] - cord [1];

  distance = Math.sqrt(delX*delX + delY*delY );

  return distance;
}

function indexOfSmallest(a) {
  console.log(a);
  for (var i = 1; i < a.length; i++) {
    if (a[i] < a[lowest]) lowest = i;
  }
  showLocOfNearest(lowest);
};

function showLocOfNearest(lowest){
  para.innerHTML = "Latitude: " + cordi[lowest][0] + "<br>Longitude: " + cordi[lowest];
}





