'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const rest = require('rest');

class App extends Component {
    
    showWeahtherInfo(status) {
        const weatherContent =
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Weather today</h1>'+
            '<div id="bodyContent">'+
            '<p><b>You are in </b>' + status.name + '</p>'+
            '<p><b>Weather forecast: </b>' + status.weather[0].main + '</p>'+
            '<p><b>Temperature: </b>' + Math.trunc(status.main.temp - 273.15) + '°C</p>'+
            '<p><b>Max Temp: </b>' + Math.trunc(status.main.temp_max - 273.15) + '°C</p>'+
            '<p><b>Min Temp: </b>' + Math.trunc(status.main.temp_min - 273.15) + '°C</p>'+
            '</div>'+
            '</div>';

        const coordinates = new google.maps.LatLng({
            lat: status.coord.lat, 
            lng: status.coord.lon
        });
        let infowindow = new google.maps.InfoWindow({
            content: weatherContent, 
            position: coordinates
        });

        infowindow.open(map);
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