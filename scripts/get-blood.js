mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGluZ2d1eSIsImEiOiJjanFvNTFsd2kwOTN3NDJwcHg1dGhuMDIxIn0.N3GDeGA8KOSp0ZbZ9262hA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [77.2169, 28.6673],
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
                    "description": "Kohat Enclave",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1384, 28.6990]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Prashant Vihar",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1330, 28.7141]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Shalimar Bagh",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1696, 28.7034]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Karol Bagh",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1912, 28.6527]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Cannaught Bagh",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.2080, 28.6307]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Geeta Colony",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.2724, 28.6526] 
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Yamuna Vihar",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.2681, 28.7023] 
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Rajouri Garden",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.1234, 28.6474]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "Mayur Vihar",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.2946, 28.6088]
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

const cordi = [[77.1384, 28.6990, 'Kohat Enclave' ],
               [77.1330, 28.7141, 'Prashant Vihar'],
               [77.1696, 28.7034, 'Shalimar Bagh'],
               [77.1912, 28.6527, 'Karol Bagh'],
               [77.2080, 28.6307, 'Cannaught Place'],
               [77.2724, 28.6526, 'Geeta Colony'],
               [77.2681, 28.7023, 'Yamuna Vihar'],
               [77.1234, 28.6474, 'Rajouri Garden'],
               [77.2946, 28.6088, 'Mayur Vihar']
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
    currentLoc.push(position.coords.longitude);
    currentLoc.push(position.coords.latitude)
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
  para.innerHTML = `Location: ${cordi[lowest][2]} <br>
                    Longitude: ${cordi[lowest][0]} <br> 
                    Latitude: ${cordi[lowest][1]}`; 
}

// function newMaprender(){
//   mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGluZ2d1eSIsImEiOiJjanFvNTFsd2kwOTN3NDJwcHg1dGhuMDIxIn0.N3GDeGA8KOSp0ZbZ9262hA';

// var map1 = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v9',
//   center: [77.200, 28.7041],
//   zoom: 11.25
// });

// map1.on('load', function () {
//   map.addLayer({
//     "id": "new",
//     "type": "symbol",
//     "source": {
//         "type": "geojson",
//         "data": {
//             "type": "FeatureCollection",
//             "features": [{
//                 "type": "Feature",
//                 "properties": {
//                     "description": "<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
//                     "icon": "star"
//                 },
//                 "geometry": {
//                     "type": "Point",
//                     "coordinates": [cordi[lowest][1],cordi[lowest][0]]
//                 }
//             }]
//           }
//         },
//     "layout": {
//         "icon-image": "{icon}-15",
//         "icon-allow-overlap": true
//     }
//   });
// });

// }
