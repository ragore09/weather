'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const rest = require('rest');

let weatherPopUp = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

class App extends Component {
    constructor(props) { 
        super(props);
    }

    showWeahtherInfo(status) {
        const coordinates = new google.maps.LatLng({
            lat: status.coord.lat, 
            lng: status.coord.lon
        });
        let infowindow = new google.maps.InfoWindow({
            content: weatherPopUp, 
            position: coordinates
        });

        infowindow.open(map);

        // let marker = new google.maps.Marker({
        //     position: coordinates,
        //     map: map,
        //     title: 'Uluru (Ayers Rock)'
        // });

        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });
    }
    
    getGeoLocation() {
        let self = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                rest('/getLocation?lat='.concat(position.coords.latitude)
                    .concat('&lon=').concat(position.coords.longitude))
                    .then((response) => { 
                        let status = JSON.parse(response.entity);
                        self.showMap(status);
                        self.showWeahtherInfo(status);
                    });
            });
        } else {
            console.log('geolocation not available')
        }
    }

    showMap(status) { 
        const coordinates = new google.maps.LatLng({
            lat: status.coord.lat, 
            lng: status.coord.lon
        });
        map.panTo(coordinates);
        map.setZoom(18);
    }
    
    render() {
        return (
            <div>
                {this.getGeoLocation()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('weatherApp')
)